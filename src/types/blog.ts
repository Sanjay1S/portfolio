export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  published: boolean;
  readingTime: string;
  content: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  published: boolean;
  readingTime: string;
}
