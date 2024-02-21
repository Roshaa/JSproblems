uniqueArr([-5, 1, -7, -5, -2, 3, 3, -5, -1, -1]) // [1, 3]

uniqueArr([3, -3, -3, 5, 5, -6, -2, -4, -1, 3]) // [3, 5]

uniqueArr([10, 6, -12, 13, 5, 5, 13, 6, 5]) // [10, 6, 13, 5]

function uniqueArr(array){

    let filtredarray = []
    array.forEach(element => {
        if (element>=0) {
            if (!filtredarray.includes(element)) {
                filtredarray.push(element)
            }
        }
    });
    console.log(filtredarray)
}