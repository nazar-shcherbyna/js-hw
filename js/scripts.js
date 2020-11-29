(function() {
    'use strict';

    do {
        let ageUsers = +prompt('Please enter your age');

        if (ageUsers !== null) {
            ageUsers = +ageUsers;

            if (isNaN(ageUsers)) {
                alert('Enter number.');
            } else if (ageUsers < 0) {
                alert('Enter positive number.');
            } else {
                if (ageUsers > 0 && ageUsers < 13) {
                    alert('Child');
                } 
                if (ageUsers > 12 && ageUsers < 19) {
                    alert('teenager');
                }
                if (ageUsers > 18 && ageUsers < 61) {
                    alert('adult');
                }
                if (ageUsers > 60 && ageUsers < 121) {
                    alert('old');
                }
                if (ageUsers > 120) {
                    alert('people don`t live so much');
                }
                
            }
        }

    } while (ageUsers !==null);

})();