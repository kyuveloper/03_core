/* 03_method-shorthand(메서드 단축) */

// ES5에서 메서드를 정의하려면 프로퍼티 값으로 함수를 할당한다.
let dog = {
    name : '뽀삐',
    eat : function (food) {
        console.log(`${this.name}(은)는 ${food}를 맛있게 먹어요.`);
    }
}

for (key in dog) {
    console.log(dog[key]) // 뽀삐 , [Function: eat] 출력
}
console.log("=======================")

dog.eat('고구마');
console.log(dog.eat);

// ES6에서는 메서드를 정의할 때 function 키워드를 생략한 축약 표현을 사용할 수 있다.
let dog2 = {
    name : '두부',
    // 메서드 축약 표현
    eat(food) {
        console.log(`${this.name}(은)는 ${food}를 맛있게 먹어요.`);
    }
}

dog2.eat('고구마');