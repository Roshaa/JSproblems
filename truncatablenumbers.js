truncatable(9137); // "left"
// Because 9137, 137, 37 and 7 are all prime.

truncatable(5939); // "right"
// Because 5939, 593, 59 and 5 are all prime.

truncatable(317); // "both"
// Because 317, 17 and 7 are all prime and 317, 31 and 3 are all prime.

truncatable(5); // "both"
// The trivial case of single-digit primes is treated as truncatable from both directions.

truncatable(139); // false
// 1 and 9 are non-prime, so 139 cannot be truncatable from either direction.

truncatable(103); // false
// Because it contains a 0 digit (even though 103 and 3 are primes).

truncatable(9138); // false
// Because it contains a 0 digit (even though 103 and 3 are primes).

function truncatable(number) {
  message1 = 'left';
  message2 = 'right';

  numbersize = number.toString().length;
  numberS = number.toString();

  primeverify = numberS;

  for (let i = 0; i < numbersize; i++) {
    //char = numberS[i - 1];
    //primeverify = primeverify.replace([char], "");

    primeverify = primeverify.slice(i,numbersize);

    a = primeverify;
    dc = 0;

    for (let i = 0; i < a; i++) {
      b = a / i;
      if (b === Math.floor(b)) {
        dc++;
      }
    }

    /*console.log(a + "left->");
    console.log("divisible count:" + dc);*/

    if (dc > 2) {
      message1 = '';
    }else if (dc == 1) {
      message1 = '';
    }else if(numberS.includes("0")){
      message1 = '';
    }

  }

  primeverify = numberS;
  for (let i = numbersize; i > 0; i--) {

    primeverify = primeverify.slice(0, [i]);

    a = primeverify;
    dc = 0;

    for (let i = 0; i < a; i++) {
      b = a / i;
      if (b === Math.floor(b)) {
        dc++;
      }
    }

    /*console.log(a + "right->");
    console.log("divisible count:" + dc);*/

    if (dc > 2) {
      message2=''
    }else if (dc == 1) {
      message2 = '';
    }else if(numberS.includes("0")){
      message2 = '';
    }
  }
  
if (message1=='left'&& message2=='') {
  console.log('left')
}else if (message1==''&& message2=='right') {
  console.log('right')
} else if (message1=='left'&& message2=='right') {
  console.log('both')
} else{
  console.log('false')
}

}