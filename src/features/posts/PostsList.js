import React from 'react'
import { useSelector } from 'react-redux'
import { selectPosts } from './postSlice'
import { Link } from 'react-router-dom'
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons'

const PostsList = () => {
    const posts = useSelector(selectPosts);
    // In order to show newest posts first, we have to sort our posts by timestamp
    // Since array.sort() mutates the existing array, we need to make a copy of state.posts and sort that copy
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
    console.log(orderedPosts)
    const renderPosts = orderedPosts.map(post => (
        <article className="post-excerpt" key={post.id}>
            <div>
                <PostAuthor userId={post.user} />
                <TimeAgo timestamp={post.date} />
            </div>
            <h3>{post.title}</h3>
            <p className="post-content">{post.content.substring(0, 100)}</p>
            <ReactionButtons post={post} />
            <Link to={`/posts/${post.id}`} className="button muted-button">View Post</Link>
        </article>
    ))

    return (
        <section className="posts-list">
            <h2>Posts</h2>
            {renderPosts}
        </section>
    )
}

export default PostsList
