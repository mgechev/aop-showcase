import {before, after, afterResolve} from 'aspect.js';

export class LoggerAspect {
  @before(/.*/, /^get/)
  before(m, param) {
    console.log(`${this.getPrefix(m)} Invoked with ${param}`);
  }
  @after(/.*/, /^get/)
  after(m, id) {
    console.log(`${this.getPrefix(m)} Waiting to complete...`);
  }
  @afterResolve(/.*/, /^get/)
  afterResolve(m, id) {
    console.log(`${this.getPrefix(m)} Request completed!`);
  }
  getPrefix(m) {
    return `${m.className}.${m.name}:`;
  }
}
