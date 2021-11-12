import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { postAdded } from './postSlice';

const AddPostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');

    const users = useSelector(state => state.users);

    const dispatch = useDispatch();

    const onTitleChanged = e => setTitle(e.target.value);
    const onContentChanged = e => setContent(e.target.value);
    const onAuthorChanged = e => setUserId(e.target.value);

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(postAdded(title, content, userId))
            setTitle('');
            setContent('');
        }
    }

    // user can click on button only if all field are not empty. Button disabled={!canSave}
    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

    // выпадающий список пользователей. В качестве value передаем id, чтобы обновлять стейт и передавать его при отправке поста
    const usersOptinons = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

    return (
        <section>
            <h2>Add a New Post</h2>

            <form>
                <select value={userId} id="postAuthor" onChange={onAuthorChanged}>
                    <option value=""></option>
                    {usersOptinons}
                </select>
                <label htmlFor="postTitle">Post Title:</label>
                <input type="text" id="postTitle" name="postTitle" value={title} onChange={onTitleChanged} placeholder="Enter title" />
                <label htmlFor="postContent">Content:</label>
                <textarea id="postContent" name="postContent" value={content} onChange={onContentChanged} />
                <button type="button" onClick={onSavePostClicked} disabled={!canSave}>Save Post</button>
            </form>
        </section>
    )
}

export default AddPostForm;
