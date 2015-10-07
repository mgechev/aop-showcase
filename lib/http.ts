import * as fetch from 'isomorphic-fetch';
import {Wove} from 'aspect.js';

@Wove
export class Http {
  get(url) {
    return fetch(url + '?' + Math.random())
      .then(res => {
        return res.json();
      });
  }
  post(url, data) {
    return fetch(url, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => {
      return res.json();
    });
  }
}
