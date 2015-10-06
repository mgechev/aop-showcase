/// <reference path="../tsd.d.ts"/>

import {Http} from './http';
import {Inject} from 'angular2/angular2';
import {User} from './user';
import {Wove} from 'aspect.js';
import {API_SERVER} from './config';

@Wove
export class UserMapper {
  constructor(
      @Inject(Http) private http:Http,
      @Inject(API_SERVER) private url:string) {
  }
  get(id: number): Promise<User> {
    return this.http.get(this.url + '/' + id)
      .then(res => {
        let user = new User();
        user.id = res.id;
        user.name = res.name;
        user.email = res.email;
        user.website = res.website;
        return user;
      });
  }
}
