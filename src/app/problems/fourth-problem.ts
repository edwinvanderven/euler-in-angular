import { IProblem } from '../app.component.model';

export class FourthProblem implements IProblem {
  public title = 'Problem 4';
  public description = 'A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.' +
                        '\nFind the largest palindrome made from the product of two 3-digit numbers.';

  getAnswer(): string {
    let result: number = 0;
    const length = 999;

    for (let i = length; i > 100; i--) {
      for (let j = length; j > 100; j--) {
        let cal = i * j;
        if (cal > result && this.isPalindrome('' + cal)) {
          result = cal;
        }
      }
    }

    return result.toString();
  }

  private isPalindrome(s: string): boolean {
    return s === s.split("").reverse().join("");
  }
}