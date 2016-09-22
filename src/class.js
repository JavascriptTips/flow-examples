/**
 * 自定义class，用法类似基本类型
 */
//@flow
'use strict'

class MyClass{
  name:string;
  constructor(n){
    this.name = n;
  }
}

var myClass : MyClass = new MyClass('abc');


class MyClass2<T>{
  name:T;
  constructor(n:T){
    this.name = n;
  }
  getName(){
    return this.name
  }
}

var myObj:MyClass2<number> = new MyClass2(123);
var name = myObj.getName();

console.log(name);