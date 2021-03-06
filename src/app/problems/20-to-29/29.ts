import { IProblem } from '../../app.component.model';

export class P29 implements IProblem {
    public title = 'Problem 29';
    public description =
        'Consider all integer combinations of ab for 2 ≤ a ≤ 5 and 2 ≤ b ≤ 5:' +
        '\n2^2=4, 2^3=8, 2^4=16, 2^5=32' +
        '\n3^2=9, 3^3=27, 3^4=81, 3^5=243' +
        '\n4^2=16, 4^3=64, 4^4=256, 4^5=1024' +
        '\n5^2=25, 5^3=125, 5^4=625, 5^5=3125' +
        '\nIf they are then placed in numerical order, with any repeats removed, we get the following sequence of 15 distinct terms:' +
        '\n4, 8, 9, 16, 25, 27, 32, 64, 81, 125, 243, 256, 625, 1024, 3125' +
        '\nHow many distinct terms are in the sequence generated by ab for 2 ≤ a ≤ 100 and 2 ≤ b ≤ 100?';

    getAnswer(): string {
        const resultSet = new Set();

        for (let a = 2; a <= 100; a++) {
            for (let b = 2; b <= 100; b++) {
                // A javascript Set only stores unique values
                resultSet.add(Math.pow(a, b));
            }
        }

        return resultSet.size.toString();
    }
}
