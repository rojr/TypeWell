export class Fibonacci {
    public getNumbers(amount?: number) {

        const fibs: number[] = [];

        for (let i = 0; i < amount; i++) {
            if (i > 1) {
                fibs.push(fibs[i - 1] + fibs[i - 2]);
            } else {
                fibs.push(1);
            }
        }

        return fibs;
    }
}
