import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import BookNote from "@/components/BookNote";
import PostPreview from "@/components/PostPreview";
import { getPosts } from "@/utils/posts";
import { getNotes } from "@/utils/notes";

export default async function Home() {
  const allPosts = await getPosts();
  const allBookNotes = await getNotes();
  return (
    <main className="relative  bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <Grid />
        <RecentProjects />
        <div className="my-20">
          <h1 className="heading">
            A small selection of{" "}
            <span className="text-purple">recent writing</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3">
            {allPosts.posts.map((post) => (
              <PostPreview
                key={`${Math.floor(Math.random() * 1)}`}
                post={post}
              />
            ))}
          </div>
        </div>

        <div className="my-20">
          <h1 className="heading">
            A small selection of{" "}
            <span className="text-purple">recent reading</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4">
            {allBookNotes.notes.map((book) => (
              <BookNote key={`${Math.floor(Math.random() * 1)}`} book={book} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
