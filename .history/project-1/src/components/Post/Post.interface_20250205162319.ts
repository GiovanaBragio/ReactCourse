import { PostCardProps } from "../PostCard/PostCard.interface";

export interface PostProps {
    posts: PostCardProps[];
    nextPosts: number;
}