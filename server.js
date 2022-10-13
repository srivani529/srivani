var data =
    [  'srivani' ,
      'ambati' ,
      'gowthami',
      'bala',
      'vani',
      'pidugu',
    ]
val=4
var newdata = []
while (data.length){
    console.log(data.length,"uuu")
     newdata.push(data.splice(0,val).join(''))
}
console.log(newdata)