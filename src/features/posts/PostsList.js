import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectPosts } from './postSlice'

const PostsList = () => {
    const posts = useSelector(selectPosts);

    const renderPosts = posts.map(post => (
        <article className="post-excerpt" key={post.id}>
            <h3>{post.title}</h3>
            <p className="post-content">{post.content.substring(0, 100)}</p>
        </article>
    ))

    console.log(renderPosts)

    return (
        <section className="posts-list">
            <h2>Posts</h2>
            {renderPosts}
        </section>
    )
}

export default PostsList
