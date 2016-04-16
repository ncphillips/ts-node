import {BlogPostCollection} from "../../blog/BlogPostCollection";
import BlogPost = require("../../blog/BlogPost");
export class MemoryBlogPostCollection implements BlogPostCollection {
  constructor() {
    console.log("Creating in memory blog post collection");
  }
  findById(id:string|number, callback:(err:Error, post:BlogPost)=>any): void {
    console.log("findById");
  }

  save(post:BlogPost, callback:(err:Error, post:BlogPost)=>any): void {
    console.log("save");
  }
}

module.exports = MemoryBlogPostCollection;
