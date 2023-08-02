import {createUser} from '../../../shared/test-utils';
import {selectUserState} from './user.selector';

describe('UserSelectors', () => {
  describe('selectUserState', () => {
    it('should return the UserState', () => {
      const userInfo = [createUser()];
      const userState = {
        data: userInfo
      };

      const userSelector = (selectUserState.projector as any)(userState);
      expect(userSelector).toEqual(userState);
    });
  });
});
