fizzBuzz = (arr) => {
    let fizzBuzzArr = [];
	let fizzBuzz = `${fizzBuzzArr}`;
	arr.map((num) => {
		if (num % 3 === 0 && num % 5 === 0) {
			fizzBuzzArr.push('fizzBuzz');
		} else if (num % 5 === 0) {
			fizzBuzzArr.push('buzz');
		} else if (num % 3 === 0) {
			fizzBuzzArr.push('fizz');
		} else {
			fizzBuzzArr = ':(';
		}
    });
    if(fizzBuzzArr === [])
    return fizzBuzzArr
};

console.log(fizzBuzz([ 1, 2, 3, 4, 5, 15]));
