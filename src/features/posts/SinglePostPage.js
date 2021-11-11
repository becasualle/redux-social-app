import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// достаем айди поста из ссылки, находим этот пост в массиве внутри стейта, рендерим его
const SinglePostPage = ({ match }) => {
    // React Router передает объект match, который содежрит инфу об URL
    // Когда установим route для рендера этого компонента, мы попросим его
    // спарсить вторую часть URL в кач-ве переменной postId, значение которой можем прочитать из match.params
    const { postId } = match.params;

    // каждый раз, когда референс селектора меняется, компонент ре-рендерится.
    // Выбираем минимально возможный объем данных из стора, чтобы компонент рендерился только когда нужно.
    const post = useSelector(state => state.posts.find(post => post.id === postId));

    if (!post) return (
        <section>
            <h2>Post not found!</h2>
        </section>
    )

    return (
        <section>
            <article className="post">
                <h2>{post.title}</h2>
                <p className="post-content">{post.content}</p>
                <Link to={`/editPost/${post.id}`} className="button">Edit Post</Link>
            </article>
        </section>
    )
}

export default SinglePostPage
