/* 
    자바스크립트의 함수는 객체이다.
    함수는 값으로 취급할 수 있고 프로퍼티 값으로 사용할 수 있다.
*/

let dog = {
    name : "뽀삐",
    eat : function(food) { // name이 undefined로 나옴
        // console.log(`${name}(은)는 ${food}를 맛있게 먹어요`);
        console.log(`${this.name}(은)는 ${food}를 맛있게 먹어요`);
    },
    eat2 : (food) => { // 화살표 함수는 this 안받음
        console.log(`${this.name}(은)는 ${food}를 맛있게 먹어요`);
    }
}

dog.eat("고구마");

let epl = {
    name : 'Liverpool',
    vs : 'MU',
    eat : function(match) { // 화살표 함수 표현보다는 권장됨..
        console.log(`${match} - ${this.name} 7 : 0 ${this.vs}`)
    },
    eat2 : function(match) {
        const self = this

        const callback = () => {
            console.log(`${match} - ${self.name} 7 : 0 ${self.vs}`)
        }
        callback();
    }
}

epl.eat("match")
epl.eat2("match")