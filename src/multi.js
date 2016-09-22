/**
 * 限定于 几个值
 */

//@flow

/**
 * 可能有多个类型
 */

var aa: ? number = null;
var bb: ? number = 1;
var cc: ? number = undefined;

var dd: number | string = 22
var ee: number | string = 'abcd'


type Ca = string | number;

var c: Ca = 1;

type Values = 'A' | 'B';

var d: Values = 'B';
