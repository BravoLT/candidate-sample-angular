import {createActionGroup, emptyProps} from '@ngrx/store';
import {User} from './user.state';

export const UserActions = createActionGroup({
  source: 'UserActions',
  events: {
    'Retrieve Users': emptyProps(),
    'Retrieve Users Success': (data: User[]) => ({data}),
  },
});
