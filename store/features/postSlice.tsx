import { builder } from '@/client/client';
import { postinitState, plists, payload } from '@/typings';
import { createSlice } from '@reduxjs/toolkit';
import Link from 'next/link';
import Image from 'next/image';
// Initial state
const initialState: postinitState = {
  post: [{}],
};

export const postSlice = createSlice({
  name: 'postdata',
  initialState,

  reducers: {
    post: (state, { payload }: payload) => {
      const arr = payload || [];
      //POST
      state.post = Object?.values(arr).filter((v) => {
        return v._type === 'post';
      });
    },
  },
});

export default postSlice.reducer;

export const { post } = postSlice.actions;

export const selectPostState = (state: any) => state?.postdata?.post;
