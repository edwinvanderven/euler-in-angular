import { TwentyEighthProblem } from './twenty-eighth-problem';

describe('TwentyFirstProblem', () => {
  let problem: TwentyEighthProblem;

  beforeEach(() => {
    problem = new TwentyEighthProblem();
  });

  it('should exist', () => {
    expect(problem).toBeDefined();
  });

  it('should return the correct answer', () => {
    expect(problem.getAnswer()).toEqual('669171001');
  });
});
