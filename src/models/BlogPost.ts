
export interface BlogPost {
  title: string;
  category: string;
  author: string;
  date: string;
  views: number;
  imageUrl: string;
  content: string;
}

export interface BlogResource {
  imageUrl: string;
  title: string;
  link: string;
  source: string;
}
