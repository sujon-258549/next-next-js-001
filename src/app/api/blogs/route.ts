import { NextResponse } from "next/server";

export const blogs = [
  {
    id: "1",
    name: "The Future of Web Development",
    image:
      "https://cdn.pixabay.com/photo/2016/12/28/09/36/web-1935737_1280.png",
    description:
      "The future of web development is evolving at a rapid pace, driven by advancements in technology and changing user expectations. Modern frameworks like React, Angular, and Vue are revolutionizing how developers build dynamic and responsive web applications. Additionally, the rise of serverless architecture, progressive web apps (PWAs), and WebAssembly is opening new possibilities for performance and scalability. Developers are also embracing AI and machine learning to create smarter, more personalized user experiences. As the demand for faster, more secure, and accessible websites grows, the role of web developers will continue to expand. Staying updated with the latest trends and tools is essential for anyone looking to thrive in this ever-changing field. The integration of AR/VR technologies and the increasing importance of cybersecurity are also shaping the future of web development. In this article, we explore these trends and discuss how they are transforming the way we build and interact with the web.",
    createdAt: "2025-02-16T10:00:00Z",
    likes: 150,
    author_name: "John Doe",
    author_image:
      "https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg",
  },
  {
    id: "2",
    name: "React vs Vue: A Comparison",
    image:
      "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg",
    description:
      "Choosing the right JavaScript framework for your project can be a daunting task, especially with so many options available. React and Vue are two of the most popular frameworks, each with its own strengths and weaknesses. React, developed by Facebook, is known for its flexibility and large ecosystem, making it ideal for complex, large-scale applications. Vue, on the other hand, is praised for its simplicity and ease of integration, making it a favorite among beginners and small to medium-sized projects. Both frameworks have robust communities and extensive documentation, but they differ in terms of learning curve, performance, and scalability. In this article, we provide an in-depth comparison of React and Vue, covering their core features, use cases, and performance benchmarks. Whether you're a seasoned developer or just starting out, this guide will help you make an informed decision for your next project.",
    createdAt: "2025-02-17T10:00:00Z",
    likes: 178,
    author_name: "Jane Smith",
    author_image:
      "https://cdn.pixabay.com/photo/2016/09/14/08/26/web-1668927_1280.jpg",
  },
];

export const GET = async () => {
  return NextResponse.json(blogs);
};
export const POST = async (request: Request) => {
  const blog = await request.json();
  const newBlog = {
    ...blog,
    id: blogs.length + 1,
  };
  blogs.push(newBlog);
  return new NextResponse(JSON.stringify(blogs), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
