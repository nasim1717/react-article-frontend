import useTitle from "../../../hooks/useTitle";
import BlogsProvider from "../../../provider/BlogsProvider";
import FavouriteBlogsProvider from "../../../provider/FavouriteBlogsProvider";
import PopularBlogsProvider from "../../../provider/PopularBlogsProvider";
import BlogContents from "./BlogContents";
import MostPopular from "./MostPopular";
import YourFavourites from "./YourFavourites";

export default function Home() {
  useTitle("Article");

  return (
    <>
      <BlogsProvider>
        <PopularBlogsProvider>
          <FavouriteBlogsProvider>
            <main>
              <section>
                <div className="container">
                  <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
                    <BlogContents />
                    <div className="md:col-span-2 h-full w-full space-y-5">
                      <MostPopular />
                      <YourFavourites />
                    </div>
                  </div>
                </div>
              </section>
            </main>
          </FavouriteBlogsProvider>
        </PopularBlogsProvider>
      </BlogsProvider>
    </>
  );
}
