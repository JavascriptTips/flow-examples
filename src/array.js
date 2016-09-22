/**
 * 数组
 */

//@flow


//基于基本类似的数组，数组内都是相同类型
var numberArr:number[] = [12,3,12,5,2];
//另一个写法
var numberAr2r:Array<number> = [12,3,2,3];

var stringArr:string[] = ['12','a','cc'];
var booleanArr:boolean[] = [true,true,false];
var nullArr:null[] = [null,null,null];
var voidArr:void[] = [ , , undefined,void(0)];


//数组内包含各个不同的类型数据
//第4个原素没有声明，则可以是任意类型
var arr:[number,string,boolean] = [1,'a',true,function(){},];