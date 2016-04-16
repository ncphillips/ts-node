import BlogPost = require("./BlogPost");
export interface BlogPostCollection {
  findById(id: string|number, callback: (err:Error, post:BlogPost)=>any): void;
  save(post: BlogPost, callback: (err:Error, post:BlogPost)=>any): void;
}
