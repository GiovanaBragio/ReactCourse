import PostCard from "../PostCard/PostCard";
import { PostProps } from "./Post.interface";

const Post = ({posts, nextPosts}: PostProps) => {
    return (
        <div className="Home__posts">
        {posts.slice(0, nextPosts).map(post => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
            cover={post.cover} />
        )
        )}
      </div>
    )
}

export default Post;