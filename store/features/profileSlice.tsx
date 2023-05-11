import { builder } from '@/client/client';
import { payload, profileinitState } from '@/typings';
import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState: profileinitState = {
  profile: {
    img: '',
    title: '',
    text: ''
  }
};

export const profileSlice = createSlice({
  name: 'profiledata',
  initialState,

  reducers: {
    profile: (state, { payload }: payload) => {
      const arr = payload || [];
      //PROFILE
      state.profile = Object?.values(arr)
        .filter((v) => {
          return v._type === 'profile';
        })
        .map((v) => {
          const img = v.mainImage ? builder(v.mainImage) : '/noimage.jpg';
          return {
            img,
            title: v.title,
            text: v.excerpt,
          };
        })[0];
    },
  },
});

export default profileSlice.reducer;

export const { profile } = profileSlice.actions;

export const selectProfileState = (state: any) => state.profiledata.profile;
