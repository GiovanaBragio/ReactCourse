import { PostCardProps } from "./PostCard.interface";
import './PostCard.styles.css';

const PostCard = ({ cover, title, body }: PostCardProps) => {
  return (
    <div className="post">
      <img src={cover} alt={title} />
      <div className="post-content">
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    </div>
  )
}

export default PostCard;