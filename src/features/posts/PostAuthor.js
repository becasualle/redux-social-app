import React from 'react'
import { useSelector } from 'react-redux'

// we get userId from posts.user (in postSlice) and provide it as a prop from parent component
// we call this component in SinglePostPage and in PostList
const PostAuthor = ({ userId }) => {
    const author = useSelector(state => state.users.find(user => user.id === userId))

    return (
        <span>
            by {author ? author.name : 'Unknown author'}
        </span>
    )
}

export default PostAuthor
