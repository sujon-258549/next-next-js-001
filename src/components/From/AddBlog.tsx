import { createBlogs } from "@/action/createBlogs";
import From from "next/form";
const AddBlog = () => {
  return (
    <div>
      <From
        action={createBlogs}
        style={{ boxShadow: "1px 1px 10px" }}
        className="font-[sans-serif] m-6 max-w-4xl mx-auto p-5 md:p-10 rounded-md"
      >
        <h2 className="text-3xl md:text-5xl text-center font-bold md:pt-5 md:mb-10 py-5">
          Create Blog
        </h2>
        <div className="grid sm:grid-cols-2 gap-10">
          {/* New Fields from JSON */}
          <div className="relative flex items-center sm:col-span-2">
            <label className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px]">
              Article Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter article name"
              className="px-4 py-2 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none"
            />
          </div>
          <div className="relative flex items-center sm:col-span-2">
            <label className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px]">
              Image URL
            </label>
            <input
              name="image"
              type="text"
              placeholder="Enter image URL"
              className="px-4 py-2 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none"
            />
          </div>
          <div className="relative flex items-center sm:col-span-2">
            <label className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px]">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Enter description"
              className="px-4 py-2 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none"
            />
          </div>
          <div className="relative flex items-center">
            <label className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px]">
              Created At
            </label>
            <input
              type="date"
              name="createdAt"
              placeholder="Enter creation date"
              className="px-4 py-2 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none"
            />
          </div>
          <div className="relative flex items-center">
            <label className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px]">
              Likes
            </label>
            <input
              name="likes"
              type="number"
              placeholder="Enter likes"
              className="px-4 py-2 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none"
            />
          </div>
          <div className="relative flex items-center sm:col-span-2">
            <label className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px]">
              Author Name
            </label>
            <input
              type="text"
              name="author_name"
              placeholder="Enter author name"
              className="px-4 py-2 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none"
            />
          </div>
          <div className="relative flex items-center sm:col-span-2">
            <label className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px]">
              Author Image URL
            </label>
            <input
              type="text"
              name="author_image"
              placeholder="Enter author image URL"
              className="px-4 py-2 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none"
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-8 px-6 py-2.5 w-full text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-all"
        >
          Submit
        </button>
      </From>
    </div>
  );
};

export default AddBlog;
