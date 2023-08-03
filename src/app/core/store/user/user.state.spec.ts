import {initialUserState} from './user.state';

describe('UserState', () => {
  it('should have initial expected values', () => {
    const expected = {
      data: []
    };
    expect(initialUserState).toEqual(expected);
  });
});
