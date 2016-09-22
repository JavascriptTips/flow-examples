'use strict'
//@flow
class DataType{
  name:string;
  sex:number;
  constructor(arg){
    this.name = arg.name;
    this.sex = Number(arg.sex);
  }
}

function getDataFromServer(param,cb){

  cb({
    name:1,  //@ERROR
    sex:'1'
  })
}

function req(param:Object):Promise<DataType>{
  return new Promise(resolve=>{

    getDataFromServer(param,function (returnData) {
      resolve(new DataType(returnData))
    });
  });
}


req({}).then((data:DataType)=>{

  console.log(data.name);
});
