import BlogPost = require("./BlogPost");
export interface BlogPostCollection {
  findById(id: number, callback: (err:Error, post:BlogPost)=>any): void;
  save(post: BlogPost, callback: (err:Error, post:BlogPost)=>any): void;
  findAll(callback: (err:Error, posts:BlogPost[])=>any): void;
}
