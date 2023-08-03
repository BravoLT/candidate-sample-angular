import {User} from '../core/store/user/user.state';

export function createUser(
  partial?: Partial<User>
): User {
  const defaultModel: User = {
    id: 'id',
    name: 'name',
    updated: '2023-01-01T12:00:00.00Z'
  };

  return {...defaultModel, ...partial};
}
