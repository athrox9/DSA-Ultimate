//SMALL DIVE INTO ARRAYS - dynamic in JS and Python , static in Java
const items = new Array(1,2,3,4);
const il = items.length;

const newitems = new Array(il);
const nil = newitems.length;

for (let i=0;i<il;i++){
    newitems[i] = items[i];
}

console.log(nil);
console.log(newitems);

// console.log(Math.min.apply(Math, items)) - //max

const list = new Array(1,12,2,3,4,6,10,11);
const list1 = new Array(1,2,3,4,9);
// console.log(list1.splice(1,2)); - remove 
// console.log(list.concat(list1)); - add together


var list10 = ['bread', 'ice cream', 'cereals', 'strawberry', 'chocolate']
var list9 = ['bread', 'cherry', 'ice cream', 'oats', 'strawberry', 'vanilla', 'nothing', 'chocolate']

function check_common(list10, list9){	// = 0(n³+0(2)) = 0(n³)
	list3 = []; //0(1)
    for (let i=0; i<list10.length; i++){ //0(n)
        for (let j=0; j<list9.length; j++){ //0(n)
            if (list10[i] == list9[j]){ //0(n)
                list3.push(list10[i]);
            }
        }
    }
    console.log(list3); //0(1)
	}
check_common(list10, list9) // ["bread", "ice cream"]