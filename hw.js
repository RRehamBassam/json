const hw = requir('./hw.json');
var average =0;
var count=0;
list ids;
for(int i in hw){
console.log(hw[i].batter );
console.log(hw[i].topping );
average=hw[i].ppu;
ids.add(hw[i].id);
}
console.log(average/count);
console.log(ids);
