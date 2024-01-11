/* node.js 스크립트의 최상위 레벨에서 this */

/* 
    최상위 scope에서 this가 {}로 출력되는 이유
    common.js 모듈 시스템을 사용하는 node의 문제이기 때문이다.
    node는 각 모듈이 <<자체의 독립된 scope>>를 갖기 때문에 최상위 레벨의 코드 블록이 모듈 내에서 실행되어 this가 빈 객체가 되는 것이다.
*/
console.log(this); // 빈 객체가 출력됨 -> 최상위 레벨의 객체(자체의 독립된 scope)이기 때문에 참조할 것이 없다

// 모듈이 독립된 환경에서 실행되는 것 확인하기
console.log(this === module.exports);

// 일반 함수
function testFunction() {
    // 스코프가 분리되면서 this는 상위 객체를 바라보게 되고,
    // global을 참조하는 상태가 된다.
    console.log(this);
}
testFunction();

// 화살표 함수 (ES6)
const test = () => {
    // 화살표 함수는 this를 갖지 않기 때문에
    // 화살표 함수에서 호출하는 this는 상위 스코프의 this를 참조하게 된다.
    // 이로 인해 최상위 상태의 this를 호출하게 되는 것이고, this는 상위 스코프의
    // 객체를 참조하기 때문에 최상위 스코프의 상위가 존재하지 않아 this는 빈 객체({})가 출력되는 것이다.
    console.log(this);
}
//화살표 함수 출력
test();

// 브라우저의 상위 스코프 window
// node의 상위 스코프 global
console.log("================================================")
// 함수와 메서드의 차이
var func = function() {
    console.log(this);
}

const obj = {
    name: "a",
    method: func
}
console.log("========== 함수 호출 ==========") // 클래스 외부에 있는 코드의 묶음
func();
console.log("========== 메서드 호출 ==========") // 클래스 내부에 있는 코드의 묶음
obj.method();

// =============== 메서드 내부의 this ===============
console.log("=============== 메서드 내부의 this ===============")
const innerThis = {
    methodA: function(){console.log(this)}, // innerThis 바라봄
    inner: {
        methodB: function(){
            console.log(this) // inner 바라봄
        }
    }
}
innerThis.methodA();
innerThis.inner.methodB();

console.log("=============== Object Level Bind ===============")

class person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let john = new person("John", 30);
let risa = new person("Risa", 40);

function getInfo() {
    return (`안녕하세요 ${this.name}입니다.
    저는 ${this.age}세입니다,
    잘 부탁드립니다.
    `);
}
// 전역 공간에 선언된 name과 age가 없기 때문에 undefined가 출력된다.
console.log(getInfo())

// this를 지정하는 것도 가능하다.
const boundJohn = getInfo.bind(john); // -> let john = new person("John", 30, getInfo)와 같아짐
console.log(boundJohn())

const boundRisa = getInfo.bind(risa);
console.log(boundRisa())

const hansol = {
    name: "hansol",
    age: 20,
    getInfo: function() {
        console.log(`${this.name}의 나이는 ${this.age}세입니다.`)
    }
}
hansol.getInfo();

const copy = hansol.getInfo.bind(john); // john으로 보내버림

copy();