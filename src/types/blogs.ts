interface Author {
  name: string;
  image: string;
}

export interface TBlog {
  id: string;
  name: string;
  image: string;
  likes: string;
  description: string;
  createdAt: string;
  author: Author;
}
