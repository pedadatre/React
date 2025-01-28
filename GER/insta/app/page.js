
import Image from "next/image";
import PostList from "./ui/post-list";

export default function Home() {
  return (
    <>
      <h1>Posts</h1>

      <PostList />
      
    </>
  );
}