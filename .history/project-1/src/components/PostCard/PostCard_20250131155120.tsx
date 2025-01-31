import { PostCardProps } from "./PostCard.interface";

const PostCard = ({id, cover, title, body}: PostCardProps) => {
    return (
        <div className="post">
            <img src={cover} alt={title} />
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    )
}

export default PostCard;