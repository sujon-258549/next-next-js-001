"use client";

import { TBlog } from "@/types/blogs";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { AiFillLike } from "react-icons/ai";
const BlogCard = ({ blog }: { blog: TBlog }) => {
  const { id, name, image, description, createdAt, author, likes } = blog;
  const { name: authorName } = author;
  const date = moment(createdAt).format("MMMM D, YYYY");

  return (
    <div>
      <div className="">
        <div className="bg-purple-100 cursor-pointer rounded-md overflow-hidden group">
          <div className="relative overflow-hidden">
            <div className="w-full relative h-60   group-hover:scale-125 transition-all duration-300">
              <Image className="object-cover" fill src={image} alt={name} />
            </div>
            <div className="px-4 py-2.5 text-white text-sm tracking-wider bg-pink-500 absolute bottom-0 right-0">
              {date}
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-[16px] font-bold text-gray-800">
              {name.slice(0, 30)}
            </h3>
            <p>{description.slice(0, 50)}</p>
            <div className="flex justify-between py-5 items-center">
              <div className="flex gap-3 items-center ">
                <div className="relative w-10 h-10 ">
                  <Image
                    className="rounded-full"
                    priority={false}
                    fill={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                    alt="Rounded avatar"
                  />
                </div>
                <div>
                  <p>{authorName}</p>
                </div>
              </div>
              <div className="flex gap-1 items-center">
                <AiFillLike />
                {likes}
              </div>
            </div>
            <div>
              <Link
                href={`/blogs/${id}`}
                //   type="Link"
                className="px-4 py-2 mt-6 rounded-md w-full text-white text-sm tracking-wider border-none outline-none bg-pink-500 hover:bg-pink-600"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
