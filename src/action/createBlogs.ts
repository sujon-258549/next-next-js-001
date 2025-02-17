"use server";

import { redirect } from "next/navigation";

export const createBlogs = async (data: FormData) => {
  const fromData = Object.fromEntries(data.entries());
  console.log(fromData);
  const res = await fetch("http://localhost:5000/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(fromData),
  });
  const blogInfo = await res.json();
  if (blogInfo) {
    redirect(`/blogs/${blogInfo.id}`);
  }
  return blogInfo;
};
