// 함수 선언문과 할당문의 차이
/* 
    <함수 선언문>
    프로그램의 흐름을 기준으로 생각한다. (선언문)을 우선적으로 읽는다..

    1. 첫번째로 읽음
    function test() {
    console.log("이거랑")

    2. 두번째로 읽음
    function test() {
    console.log("이거 중 어떤게 실행될까?")

    3. var variable;

    4. 테스트 실행
    test(); 어디에 놔도 상관 없는 이유

    5.
    console.log(variable)

    6.
    variable = "testestestestes";
}

}
*/

test(); // 어디에 놔도 마지막 것 호출
// console.log(variable)

// 함수 선언문
function test() {
    console.log("이거랑")
}

function test() {
    console.log("이거 중 어떤게 실행될까?")
}

// var variable = "testestestestes";

console.log("=============================================")
// 프로그램을 여기서 부터 실행된다고 생각해보자

// 함수 할당문
/* 
    1.
    var funTest; 선언

    2.
    console.log(funTest);

    3.
    funTest = () = >{
        console.log("1")
    }
    
    4.
    funtest();

    5. 
    funTest = () => {
    console.log("2")
}
    6.
    funTest();
*/

console.log(funTest) // 함수 표현이 아직 완료되지 않았기 때문에 에러 발생

var funTest = () => {
    console.log("1")
}
funTest() // 첫번째 표현식 이후라 제대로 실행 1

var funTest = () => {
    console.log("2")
}
funTest() // 두번째 표현식 이후라 변경된 값 실행 2

/* 자바스크립트의 let은 동일한 변수명을 생성할 수 없다.
let funTest = () => {
    console.log("2")
}
*/

// 함수 선언문과 표현식
function a () {
    // 함수 선언식
}

// 함수 할당식
const b = function () {
    //익명 함수 표현식
}
const c = function d(){
    // 기명 함수 표현식
}

// 일회성 함수
(function() {
    console.log("이거 맞나?");
}());
