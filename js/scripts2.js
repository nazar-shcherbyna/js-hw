// (function() {
//     'use strict';

//     let items = ['!','@','#','$','%','^','&','*','(',')'];
//     do {
//         let indexNum = +prompt('Please enter number from 0 to 9');

//         if (indexNum !== null) {

//             if (isNaN(indexNum)) {
//                 alert('Enter number.');
//             } else if (indexNum < 0 || indexNum > 9) {
//                 alert('Enter correct number.');
//             } else {
//                 alert(items[indexNum]);
//             }
//         }

//     } while (indexNum !==null);
// })();

let styles = ['Jazz','Bluse','Classic','Rap','Opera'];
styles.splice(1,2,'DelBluse','DelClassic');
alert(styles);
styles.splice(-2,1,'DelRap');
alert(styles);
let copyArr = styles.slice(1,3);
alert(copyArr);
styles = styles.concat(copyArr);
alert(styles); 