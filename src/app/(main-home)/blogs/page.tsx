import BlogCard from "@/components/share/BlogCard";
import { TBlog } from "@/types/blogs";

const BlogsPage = async () => {
  const res = await fetch("http://localhost:5000/posts", {
    cache: "no-store",
  });
  const data = await res.json();
  return (
    <section className="max-w-5xl px-4 py-10 md:py-20 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.map((blog: TBlog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default BlogsPage;
