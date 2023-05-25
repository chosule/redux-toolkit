import { reactionAdded } from "./postsSlice"
import { useDispatch } from "react-redux"

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😯',
    heart: '❤',
    rocket: '🚀',
    coffee: '☕'
}
const ReactionButtons = ({ post }) => {
    // console.log(post, 'post?')
    const dispatch = useDispatch();

    const reactionButons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button
                key={name}
                type="button"
                className="reactionButton"
                onClick={() =>
                    dispatch(reactionAdded({ postId: post.id, reaction: name }))
                }
            >
                {emoji} {post.reactions[name]}
            </button>
        )
    })
    return <div>{reactionButons}</div>
}

export default ReactionButtons;