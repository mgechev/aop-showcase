import {before, after, afterResolve} from 'aspect.js';

export class LoggerAspect {
  @before(/^\w+Mapper$/, /.*/)
  before(meta, id) {
    console.log(`Invication of ${meta.className}.${meta.name} started`);
  }

  @after(/^\w+Mapper$/, /.*/)
  after(meta, id) {
    console.log(`Invocation of ${meta.className}.${meta.name} completed`);
  }

  @afterResolve(/^\w+Mapper$/, /.*/)
  afterResolve(meta, id) {
    console.log(`The async method ${meta.className}.${meta.name} completed`);
  }
}
