import { createReducer, on } from '@ngrx/store';
import { PostState } from './posts.state';
import * as PostActions from './posts.action';
import { state } from '@angular/animations';

const initialState: PostState = {
  items: [],
  currentItem: null,
  status: 'idle',
  error: '',
  sort: null,
};

export function postReducer(
  state: PostState = initialState,
  action: PostActions.PostActions
): PostState {
  switch (action.type) {
    case PostActions.GET_POSTS:
      return { ...state, status: 'loading' };
    case PostActions.GET_POSTS_SUCCESS:
      return { ...state, status: 'idle', items: action.posts, error: '' };
    case PostActions.GET_POSTS_FAILED:
      return { ...state, status: 'error', items: [], error: action.error };
    case PostActions.GET_POST:
      return { ...state, status: 'loading' };
    case PostActions.GET_POST_SUCCESS:
      return { ...state, status: 'idle', currentItem: action.item };
    case PostActions.GET_POST_FAILED:
      return {
        ...state,
        status: 'error',
        currentItem: null,
        error: action.error,
      };
    // case PostActions.SORTING_POSTS:
    //   return {
    //     ...state,
    //     state.items,
    //     sort: action.sort,
    //   };
    case PostActions.CREATE_POST:
    case PostActions.UPDATE_POST:

    // eslint-disable-next-line no-fallthrough
    default:
      return state;    
  }
}
