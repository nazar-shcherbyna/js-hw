(function() {
    'use strict';

    do {

        let indexNum = +prompt('Please enter a three-digit number');

        if (indexNum !== null) {

            if (isNaN(indexNum)) {
                alert('Enter number.');
            } else if (indexNum > 999 || indexNum < 100) {
                alert('Enter correct number.');
            } else {
                let one = indexNum / 100;
                one = Math.floor(one);
                let two = Math.floor(indexNum / 10);
                two = two % 10;
                let three = indexNum % 10;
                if (one == two && two == three) {
                    alert('all numbers are the same');
                }
                else if ((one == two ?? one != three) || (two == three && two!= one) || (three == one && three != two)) {
                    alert('two identical number');
                }
                else {
                    alert('all numbers are different');
                }
            }
        }

    } while (indexNum !==null);


})();