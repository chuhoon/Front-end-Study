// function add(num1: number, num2: number) {
//     console.log(num1, num2);
// }

// add();
// add(1);
// add(1, 2);
// add(3, 4, 5);
// add('hello', 'world');

// let car: string = 'bmw';
// car = 'benz';

// let age: number = 30;
// let isAdult: boolean = true;
// let a1: number[] = [1, 2, 3];
// let a2: Array<number> = [1, 2, 3];
// let week1: string[] = ['mon', 'tue', 'wed'];

// // 튜플
// let b: [string, number];
// 배열의 첫번째 요소는 string 두번째 요소는 number
// b = ['A', 1];
// b[0].toLowerCase();
// b[1].toLowerCase();

// void, never
// void는 함수에서 아무것도 return하지 않을 때 사용
// function sayHello(): void {
//     console.log('hello');
// }

// never는 에러를 반형하거나 영원히 끝나지 않는 타입
// function showError(): never {
//     throw new Error();
// }

// function inLoop() {
//     while (true) {
//         // 무제한 반복
//     }
// }

// enum -> 자바에서 나옴 비슷한 값끼리 묶어줌
// 양방향 맵핑이 되어 있음
// enum Os {
//     Window = 3,
//     Ios = 5,
//     Android,
// }

// let myOs: Os;

// myOs = Os.Window;

// null, undefined

// let a: null = null;
// let b: undefined = undefined;
