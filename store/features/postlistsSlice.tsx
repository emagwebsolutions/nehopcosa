import { postlistsinitState, plists } from '@/typings';
import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState: postlistsinitState = {
  postlists: [
    {
      img: '',
      slug: '',
      title: '',
    },
  ],
};

export const postlistsSlice = createSlice({
  name: 'postlistsdata',
  initialState,

  reducers: {
    postlists: (state, { payload }: plists) => {
      state.postlists = payload;
    },
  },
});

export default postlistsSlice.reducer;

export const { postlists } = postlistsSlice.actions;

export const selectPostlists = (state: any) => state.data.postlists;
