import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'

import { postUpdated } from './postSlice'

const EditPostForm = ({ match }) => {
    // подставляем id поста в SinglePostPage (Link to={`/editPost/${post.id}`}), 
    // и указываем в App.js (path="/editPost/:postId"), чтобы прочитать значение postId из match
    const { postId } = match.params;
    const post = useSelector(state => state.posts.find(post => post.id === postId));

    // запишем значения контента поста в стейт и укажем в кач-ве значения в форме
    const [title, setTitle] = useState(post.title)
    const [content, setContent] = useState(post.content)

    const dispatch = useDispatch();
    const history = useHistory();

    const onTitleChanged = e => setTitle(e.target.value);
    const onContentChanged = e => setContent(e.target.value);

    const onSavePostClicked = () => {
        if (title && content) {
            // оптравим актуальные данные, чтобы обновить пост в стейте
            dispatch(postUpdated({ id: postId, title, content }))
            // направим пользователя на страницу поста
            history.push(`/posts/${postId}`)
        }
    }

    return (
        <section>
            <h2>Edit Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input type="text" id="postTitle" name="postTitle" value={title} onChange={onTitleChanged} />

                <label htmlFor="postContent">Post Content: </label>
                <textarea id="postContent" name="postContent" value={content} onChange={onContentChanged} />
                <button onClick={onSavePostClicked}>Save Post</button>
            </form>
        </section>
    )
}

export default EditPostForm
