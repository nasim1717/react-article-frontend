import SingleBlogProvider from "../../../provider/SingleBlogProvider";
import SingleBlogContent from "./SingleBlogContent";

export default function SingleBlogMainContent() {
  return (
    <>
      <SingleBlogProvider>
        <SingleBlogContent />
      </SingleBlogProvider>
    </>
  );
}
