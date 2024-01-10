/* 
    01_property-value-shorthand (프로퍼티 값 단축 구문)
*/

let id = "p-0001";
let price = 30000;

let product = {
    id : id,
    price : price
}

console.log(product);

console.log("=========================================")
/* 
    E6에서 프로퍼티 값으로 변수를 사용하는 경우
    변수의 이름으로 프로퍼티 키를 생성하게 되어 key와 값을 생략할 수 있다.
    프로퍼티 키는 변수 이름으로, 값은 변수의 값으로 할당된다.
*/
let product2 = {
    id, price
};
console.log(product2);