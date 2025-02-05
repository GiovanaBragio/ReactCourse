import { PostCardProps } from "./PostCard.interface";
import './PostCard.styles.css';

const PostCard = ({cover, title, body}: PostCardProps) => {
    return (
        <div className="post">
            <img src={cover} alt={title} />
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    )
}

export default PostCard;