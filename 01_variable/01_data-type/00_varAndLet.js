// var 안쓰는게 좋음
function test() {
    for(var i =0; i<=3; i++) {

    }
    console.log(i)
}

test()

// let
function test2() {
    for(let i =0; i<=3; i++) {

    }
    console.log(i) // 에러 발생 범위를 벗어나서
}

test2()