import { get } from 'lodash';
export const getProfileSelector = (state)=> get(state, 'user.userProfile.user') || {};