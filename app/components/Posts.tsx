import { getSortedPostsData } from "@/lib/posts";
import PostListItem from "./PostListItem";
export default function Posts() {
  const posts = getSortedPostsData();
  return (
    <section className="mt-6 mx-auto max-w-2xl">
      <h2 className="text-4xl font-bold text-white/90">Blog</h2>
      <ul className="w-full">
        {posts.map((post) => (
          <PostListItem post={post} key={post.id} />
        ))}{" "}
      </ul>
    </section>
  );
}
