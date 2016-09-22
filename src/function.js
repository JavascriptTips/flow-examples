/**
 * 函数检查
 *
 * 函数是检查函数的参数和返回值
 */
//@flow


/**
 * 声明带类型的函数
 */

function fn(arg:number,arg2:string):Object{

  return {
    arg,
    arg2
  }
}

//箭头函数同理
var fn2 = (arg:string,arg2:number):Object => {
  return {
    arg,
    arg2
  }
}


//当函数是作为一个参数的时候，

function fn3(
  f:(arg:number,arg2:string) => Object,
){
  return f(1,'a');
}

//当函数作为一个类型时,
var fn4:(arg:string,arg2:number) => boolean = function(){
  return true;
};

//fn3(fn2); 会出错
fn3(fn);