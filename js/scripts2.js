(function() {
    'use strict';

    let items = ['!','@','#','$','%','^','&','*','(',')'];
    do {
        let indexNum = +prompt('Please enter number from 0 to 9');

        if (indexNum !== null) {

            if (isNaN(indexNum)) {
                alert('Enter number.');
            } else if (indexNum < 0 || indexNum > 9) {
                alert('Enter correct number.');
            } else {
                alert(items[indexNum]);
            }
        }

    } while (indexNum !==null);
})();