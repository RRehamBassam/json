const hw = require('./hw.json');
var average =0;
var count=0;
var ids;
for(var i in hw){
console.log(hw[i].batter );
console.log(hw[i].topping );
average=hw[i].ppu;
ids.add(hw[i].id);
}
console.log(average/count);
console.log(ids);
