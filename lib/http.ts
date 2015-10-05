import * as fetch from 'isomorphic-fetch';

export class Http {
  get(url) {
    return fetch(url + '?' + Math.random());
  }
}
