import { IProblem } from '../../app.component.model';
import { Helper } from '../../utils/helper';

export class P4 implements IProblem {
    public title = 'Problem 4';
    public description =
        'A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.' +
        '\nFind the largest palindrome made from the product of two 3-digit numbers.';

    getAnswer(): string {
        let result = 0;
        const length = 999;

        for (let i = length; i > 100; i--) {
            for (let j = length; j > 100; j--) {
                const cal = i * j;
                const isAnswer = cal > result && Helper.isPalindrome('' + cal);
                result = isAnswer ? cal : result;
            }
        }

        return result.toString();
    }
}
