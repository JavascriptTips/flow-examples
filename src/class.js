/**
 * 自定义class，用法类似基本类型
 */
//@flow

class MyClass{
  name:string;
  constructor(n){
    this.name = n;
  }
}

var myClass : MyClass = new MyClass('abc');