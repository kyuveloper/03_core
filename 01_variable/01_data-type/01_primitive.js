/* 숫자타입
    자바의 경우 정수와 실수를 구분해 int, long, float, double 등과 같은 다양한 숫자 타입을 제공한다.
    하지만 자바스크립트의 경우 하나의 숫자 타입만 존재하고 모든 수를 실수로 처리한다.
*/

let integer = 10
let double = 5.5
let negative = -10
console.log(10 === 10.0)

console.log(10/4)

/*
    숫자 타입은 추가적으로 세 가지 특별한 값도 표현할 수 있다.
    infinity : 양의 무한대
    -infinity : 음의 무한대
    NaN : 산술 연산 불가능함
*/

console.log(10/0) // infinity
console.log(10/-0) // -infinity
console.log(1 * "문자열") // Nan

console.log('======================================')
/* 
    02. 문자열 타입
    문자열 탕비은 텍스트 데이터를 나타내는데 사용한다.
    문자열은 작은 따옴표(''), 큰 따옴표(""), 또는 백틱(``)으로 텍스트를 감싼다.
    자바는 문자열을 객체로 표현하지만, 자바스크립트의 문자열은 원시 타입이며 변경 불가능한 값이다.

*/

let string;
string = 'javasript';
string = "javasript";
string = `javasript`;

string = '작은 따옴표로 감싼 문자열 내의 "큰 따옴표"는 문자열로 인식'
string = "작은 따옴표로 감싼 문자열 내의 '작은 따옴표'는 문자열로 인식"

/* 
    템플릿 리터럴
    Es6 부터 도입 된 멀티라인 문자열, 표현식 삽입 등의 편리한 문자열 처리 기능을 제공하는 문자열 표기법
    이 때는 작은 따옴표, 큰 따옴표 대신 백틱을 사용해 표현한다.
*/
// let str = "안녕하세요
// 김진규 입니다"

// 이스케이프 시퀀스를 사용해야 한다.
let str = "안녕하세요 \n 김진규 입니다."

let multiline = `안녕하세요
김진규 입니다.`

console.log(multiline)

let firstName = "진규"
let lastName = "김"

console.log(`안녕하세요 ${firstName} ${lastName} 입니다.`)

console.log('======================================')

/* 
    03. boolean 타입
    boolean 타입의 값은 논리적 참, 거짓을 나타내는 true와 false 뿐이다.
 */

let flag = true;
console.log(flag)
flag = false;
console.log(flag)

console.log('======================================')

/* 
    undefined 타입
    undefined 타입의  값은 undefined가 유일하다.
    var 키워드로 선언한 변수는 암묵적으로 undefined로 초기화된다.
    변수를 선언한 이후 값을 할당하지 않은 변수를 참조하면 undefined가 반환된다.
    undefined는 자바스크립트 엔진이 변수를 초기화 할 때 사용하는 값이고
    개발자가 의도적으로 변수에 할당하는 것은 본래 취지와 어긋나고 혼란을 줄 수 있다.
    그렇기 때문에 undefined 보다는 null을 주는 것이 바람직하다.
*/

let test;
console.log(test);

// const test2; const는 상수값이기 때문에 undefined로 초기화할 수 없음.

/* 
    null 타입
    null 타입의 값은 null이 유일하다.
    변수에 값이 없다는 것을 의도적으로 명시할 때 사용한다.
    이전에 할당 되어 있던 값에 대한 참조를 명시적으로 제거하지 않는 것을 의미하고
    자바스크립트 엔진은 누구도 참조하지 않는 메모리 공간에 대해 가비지 콜레션을 수행하게 된다.
*/

let nullVal = "something"
nullVal = null;
console.log(nullVal);

console.log('======================================')

/* 
    Symbol 타입
    심볼은 ES6에서 추가 된 7번째 타입으로, 변경 불가능한 원시 타입의 값이다.
    다른 값과 중복되지 않은 유일무이한 값으로 이름 충돌할 위험이 없는 객체에 유일한 프로퍼티 키를 만들기 위해서 사용한다.
    심볼 이외의 원시 값은 리터럴을 통해 생성하지만 심볼은 symbol 함수를 통해 호출해 생성한다.
*/

let key = Symbol("key");
console.log(typeof key);

// 객체 생성
let obj = {};

obj[key] = "value"
// 이름이 충동할 위험이 없는 유일무이한 값인 심볼을 프로퍼티 키로 사용한다.
console.log(obj[key])

console.log(obj) // 식별용이고 사용할 순 없다..