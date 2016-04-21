var config = require('./config');
class Injector {
  private mapping: {[key:string]:string};

  constructor() {
    this.mapping = config.dependencyMappings || {};
  }

  public getInstance(i: string): any {
    if (!this.mapping.hasOwnProperty(i)) {
      throw new Error("Interface has not been mapped to a concrete class");
    }
    return require(this.mapping[i]);
  }
}

export = Injector;