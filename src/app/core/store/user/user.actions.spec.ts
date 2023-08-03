import {UserActions} from './user.actions';
import {User} from './user.state';


describe('UserActions', () => {
  describe('Retrieve User', () => {
    it('should create RetrieveUser Action', () => {
      const action = UserActions.retrieveUsers();

      expect(action.type).toEqual('[UserActions] Retrieve Users');
    });
  });

  describe('Retrieve User Success', () => {
    it('should create RetrieveUserSuccess Action', () => {
      const user = {
        id: '1',
        name: 'name'
      } as User;
      const userArr = [user];
      const action = UserActions.retrieveUsersSuccess(userArr);

      expect(action.type).toEqual('[UserActions] Retrieve Users Success');
      expect(action.data.length).toEqual(1);
      expect(action.data[0]).toEqual(user);
    });
  });
});
