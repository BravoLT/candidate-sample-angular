import {createActionGroup} from '@ngrx/store';

export const ErrorActions = createActionGroup({
    source: 'ErrorActions',
    events: {
      Error: (error: any) => ({error})
    }
});
