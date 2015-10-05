/// <reference path="./tsd.d.ts"/>

import * as Reflect from 'reflect-metadata';
Object.getOwnPropertyNames(Reflect);

import {CacheAspect} from './lib/cache_aspect';
import {LoggerAspect} from './lib/logger_aspect';

import {Http} from './lib/http';
import {User} from './lib/user';
import {UserMapper} from './lib/user_mapper';

import {API_SERVER} from './lib/config';

import {Injector, bind} from 'angular2/angular2';

let bindings = [
    bind(Http).toValue(new Http()),
    bind(API_SERVER).toValue('http://jsonplaceholder.typicode.com/users/'),
    User,
    UserMapper
  ];

let injector = Injector.resolveAndCreate(bindings);

let mapper = injector.get(UserMapper);
let logger = new LoggerAspect();
let cache = new CacheAspect();

mapper.get(1)
  .then(res => {
    console.log(res.name);
  })
  .then(_ => {
    mapper.get(1)
    .then(res => {
      console.log(res.name);
    });
  });

