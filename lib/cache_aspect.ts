/// <reference path="../tsd.d.ts"/>

import {before, after} from 'aspect.js';

let inMemoryCache: Map<number, any> = new Map<number, any>();
let localStorageCache = {
  set() {
  },
  get() {
  }
};

export class CacheAspect {
  @before(/^(\w+Mapper|Http)$/, /^get/)
  beforeInvication(meta, id) {
    meta.className === 'Http' ?
      this.queryCache(inMemoryCache, meta, id) :
      this.queryCache(localStorageCache, meta, id);
  }
  @after(/^(\w+Mapper|Http)$/, /^get/)
  afterInvocation(meta, id) {
    return meta.className === 'Http' ?
      this.setCache(inMemoryCache, meta, id) :
      this.setCache(localStorageCache, meta, id);
  }
  queryCache(cache, id, meta) {
    let res = cache.get(id);
    if (res) {
      meta.invocation.proceed = false;
      return Promise.resolve(res);
    }
  }
  setCache(cache, meta, id) {
    return meta.result.then(data => {
      cache.set(id, data);
      return data;
    });
  }
}

