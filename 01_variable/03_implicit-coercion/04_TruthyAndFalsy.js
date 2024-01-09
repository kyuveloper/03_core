// 자바스크립트 엔진은 불리언 타입이 아닌 값을 Truthy 값(참으로 평가 되는 값/값의 존재 여부) 
// 또는 Falsy 값(거짓으로 평가되는 값)으로 구분한다.
// Truthy -> true, Falsy -> false로 암묵적 타입 변환 된다.

let test1; // falsy
console.log(!test1); // truthy

let test = {
    a : null,
    b : 1,
    fun() {
        console.log("asdasdas");
    }
};

// test라는 객체의 프로퍼티에 a의 값이 존재해?
if (test?.a) { // ? : 객체 프로퍼티 접근 (test안의 a 에 접근)
    console.log("true");
} else {
    console.log("false");
}

// test라는 객체의 프로퍼티 b에 값이 존재하는 경우 "a" 출력
console.log(test.b && "a");
console.log("================================================================")
test.b ? console.log("true") : console.log("false");

console.log("================================================================")
test.fun();
test?.fun();

let test2 = {
    a : '',
    b : 1,
    fun : 0
}

console.log("================================================================");
console.log(test2.a);
console.log(test2.fun);
console.log(!test2.fun);
console.log(!!test2.fun);
if(test2.fun) {
    console.log("true");
} else {
    console.log("false");
}