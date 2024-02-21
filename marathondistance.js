marathonDistance([1, 2, 3, 4])
marathonDistance([1, 9, 5, 8, 2])
marathonDistance([-6, 15, 4])



function marathonDistance(array){

const sumWithInitial = array.reduce((a,b)=>a+b);
console.log(sumWithInitial);
return sumWithInitial;

}