import { builder } from '@/client/client';
import { pagesinitState, payload } from '@/typings';
import { createSlice } from '@reduxjs/toolkit';
import PortableText from 'react-portable-text';

// Initial state
const initialState: pagesinitState = {
  page: ''
};

export const pagesSlice = createSlice({
  name: 'pagesdata',
  initialState,

  reducers: {
    pages: (state, { payload }: payload) => {
      const arr = payload || [];
      //WHO WE ARE

        state.page = Object?.values(arr)
          .filter((v) => {
            return v._type === 'pages';
          })

    },
  },
});

export default pagesSlice.reducer;

export const { pages } = pagesSlice.actions;

export const selectPagesState = (state: any) => state?.pagesdata?.page;
