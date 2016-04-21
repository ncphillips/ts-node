import {BlogPostCollection} from "../../blog/BlogPostCollection";
import BlogPost = require("../../blog/BlogPost");

var posts: BlogPost[] = [];

class MemoryBlogPostCollection implements BlogPostCollection {
  findAll(callback:(err:Error, posts:BlogPost[])=>any):void {
    callback(null, posts);
  }
  findById(id:number, callback:(err:Error, post:BlogPost)=>any): void {
    if (!posts.hasOwnProperty(id+"")) {
      console.log(posts);
      callback(new Error("Not found"), null);
    } else {
      callback(null, posts[id]);
    }
  }

  save(post:BlogPost, callback:(err:Error, post:BlogPost)=>any): void {
    if(!post.id) {
      post.id = posts.length;
    }
    posts[post.id] = post;
    callback(null, post);
  }
}

module.exports = new MemoryBlogPostCollection();
