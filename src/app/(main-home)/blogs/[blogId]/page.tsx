import { TBlog } from "@/types/blogs";
import moment from "moment";
import Image from "next/image";

export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/posts");
  const blogs = await res.json();
  return blogs.slice(0, 4).map((blog: TBlog) => ({
    blogId: blog.id,
  }));
};

const BlogDetails = async (params: Promise<{ blogId: string }>) => {
  const { blogId } = await params;
  const res = await fetch(`http://localhost:5000/posts/${blogId}`);
  const blog = await res.json();
  const { name, image, description, createdAt, author, likes } = blog;
  const { name: authorName, image: authorImage } = author;
  const date = moment(createdAt).format("MMMM D, YYYY");
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative w-full h-80">
          <Image className="object-cover" fill src={image} alt={name} />
        </div>
        <div className="px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
          <p className="text-sm text-gray-500">{date}</p>
          <div className="mt-4 flex gap-3 items-center">
            <div className="relative w-10 h-10">
              <Image
                className="rounded-full"
                fill
                src={authorImage}
                alt={authorName}
              />
            </div>
            <p>{authorName}</p>
          </div>
          <div className="mt-4">
            <p className="text-gray-700">{description}</p>
            <p className="mt-4 text-xl font-bold text-gray-800">
              Likes: {likes}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
