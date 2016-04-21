class BlogPost {
  public id: number;
  public title: string;
  public body: string;

  public constructor(title: string, body: string) {
    this.title = title;
    this.body = body;
  }
}

export = BlogPost;
