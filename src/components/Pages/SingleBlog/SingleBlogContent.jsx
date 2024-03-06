import BlogComments from "./BlogComments";
import Floating from "./Floating";
import SingleBlog from "./SingleBlog";

export default function SingleBlogContent() {
  return (
    <main>
      <SingleBlog />
      <BlogComments />
      <Floating />
    </main>
  );
}
