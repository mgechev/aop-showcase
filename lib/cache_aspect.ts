/// <reference path="../tsd.d.ts"/>

import {before, after} from 'aspect.js';

let cache: Map<number, any> = new Map<number, any>();

export class CacheAspect {
  @before(/^\w+Mapper$/, /^get/)
  queryCache(meta, id) {
    let res = cache.get(id);
    if (res) {
      meta.invocation.proceed = false;
      return Promise.resolve(res);
    }
  }

  @after(/^\w+Mapper$/, /^get/)
  setCache(meta, id) {
    return meta.result.then(data => {
      cache.set(id, data);
      return data;
    });
  }
}

