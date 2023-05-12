import { builder } from '@/client/client';
import { payload, bloginitState } from '@/typings';
import { createSlice } from '@reduxjs/toolkit';
import Image from 'next/image';
import Link from 'next/link';

// Initial state
const initialState: bloginitState = {
  blog: [{}],
};

export const blogSlice = createSlice({
  name: 'blogdata',
  initialState,

  reducers: {
    blog: (state, { payload }: payload) => {
      const arr = payload || [];

      state.blog = Object?.values(arr)
        .filter((v) => {
          return v._type === 'post';
        })
    },
  },
});

export default blogSlice.reducer;

export const { blog } = blogSlice.actions;

export const selectBlogState = (state: any) => state?.blogdata?.blog;
