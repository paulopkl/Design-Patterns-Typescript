export function randomNumbers(length: number): number {
    let num = Math.random() * length;
    num = Math.floor(num);
    return num;
}

// console.log(randomNumbers(3));
