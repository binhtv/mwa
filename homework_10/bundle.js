!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){this.name=t,this.amount=e}return t.prototype.sayHello=function(){console.log("Hello "+this.name+" with number of people is "+this.amount)},t}();e.Faculty=o},function(t,e,n){n(0),t.exports=n(2)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=new(function(){function t(t,e){var n=this;this.name=t,this.dept=e,this.faculties=[],this.graduation=function(t){console.log("Graduating "+n.dept+" "+t+" students")}}return t.prototype.addFaculty=function(t){this.faculties.push(t),this.faculties.forEach(function(t){return console.log(t)})},t}())("MUM","Computer Science");r.graduation(2019),r.addFaculty(new o.Faculty("Faculty1",100))}]);
//# sourceMappingURL=bundle.js.map