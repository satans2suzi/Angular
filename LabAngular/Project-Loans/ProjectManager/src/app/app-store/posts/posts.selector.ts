import { PostState } from './posts.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const featurePost = createFeatureSelector<PostState>('feature_post');

export const postSelector = createSelector(featurePost, state => state.items);
export const currentPostSelector = createSelector(featurePost, state => state.currentItem);
export const postStatusSelector = createSelector(featurePost, state => state.status);