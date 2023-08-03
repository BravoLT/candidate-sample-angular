import {ErrorActions} from './error.actions';

describe('ErrorActions', () => {
  describe('Error', () => {
    it('should create Error Action', () => {
      const errorMsg = 'I errored';
      const action = ErrorActions.error(errorMsg);

      expect(action.type).toEqual('[ErrorActions] Error');
      expect(action.error).toEqual(errorMsg);
    });
  });
});
