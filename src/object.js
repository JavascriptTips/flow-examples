/**
 * object相关的类型
 */

//@flow

//Object大写的O
var o:Object = {
  hello:'h'
};

//声明了Object的key
var o2:{key:string} = {
  key:'z233'
};

/**
 * 嵌套声明检查
 */
type Sex = {
  num:number
}

type Person = {
  name:string,
  sex:Sex,
};


var p:Person = {
  name:'zhou',
  sex:{
    num:1
  },
  phone:123
};


/**
 * 深度嵌套
 */
function FuncBasedClass(x) { this.x = x; }
FuncBasedClass.prototype.f = function() { return this.x; }

var y = new FuncBasedClass(42);
var z: number = y.f();

console.log(z);