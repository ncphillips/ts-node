interface Config {
  dependencyMappings: {[key:string]:string};
}


var config: Config = {
  dependencyMappings: {
    "BlogPostCollection": __dirname + "/lib/collections/MemoryBlogPostCollection"
  }
};

export = config;