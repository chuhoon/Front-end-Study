// let user: object;

// user = {
//     name: 'xx',
//     age: 30,
// };

// console.log(user.name);

type Scroe = 'A' | 'B' | 'C' | 'F';

interface User {
    name: string;
    age: number;
    gender?: string;
    birthYear: number;
    [grade: number]: Scroe;
}
// readonly 사용 수정 불가능
// ex) readonly birthYear: number;

interface Add {
    (num1: number, num2: number): number;
}

const add: Add = function (x, y) {
    return x + y;
};

add(10, 20);

interface isAdult {
    (age: number): boolean;
}

const a: isAdult = (age) => {
    return age > 19;
};

let user: User = {
    name: 'xx',
    age: 30,
    birthYear: 2000,
    1: 'A',
    2: 'B',
};

user.age = 10;
user.gender = 'male';
user.birthYear = 1990;

console.log(user.age);

interface Car {
    color: string;
    wheels: number;
    start(): void;
}

class Bmw implements Car {
    color;
    wheels = 4;
    constructor(c: string) {
        this.color = c;
    }
    start() {
        console.log('go');
    }
}

const b = new Bmw('green');
