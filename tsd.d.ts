/// <reference path="./node_modules/angular2/bundles/typings/angular2/angular2.d.ts"/>
/// <reference path="./node_modules/aspect.js/typings/tsd.d.ts"/>
/// <reference path="./node_modules/reflect-metadata/reflect-metadata.d.ts"/>
/// <reference path="./node_modules/aspect.js/dist/js/es5/aspect.d.ts"/>

declare module 'aspect.js' {
  let beforeResolve: any;
  let beforeReject: any;
  let afterResolve: any;
  let afterReject: any;
  let before: any;
  let around: any;
  let on: any;
  let after: any;
  let afterReturning: any;
  let afterThrowing: any;
  let Wove: (target: {
      name: string;
      prototype: Object;
  }) => {
      name: string;
      prototype: Object;
  };
}
