import { IProblem } from '../../app.component.model';

export class P2 implements IProblem {
    public title = 'Problem 2';
    public description =
        'Each new term in the Fibonacci sequence is generated by adding the previous two terms. ' +
        '\nBy starting with 1 and 2, the first 10 terms will be: 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ... ' +
        '\nBy considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.';

    getAnswer(): string {
        const length = 4000000;

        let result = 0;
        let current = 1;
        let next = 2;

        while (current <= length) {
            if (current % 2 === 0) {
                result += current;
            }

            const tmp = current + next;
            current = next;
            next = tmp;
        }

        return result.toString();
    }
}
