import { projectsinitState, payload } from '@/typings';
import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState: projectsinitState = {
  projects: [{}]
};

export const projectsSlice = createSlice({
  name: 'projectsdata',
  initialState,

  reducers: {
    projects: (state, { payload }: payload) => {
      const arr = payload || [];

      state.projects = Object.values(arr)
        .filter((v) => v._type === 'projects')
    },
  },
});

export default projectsSlice.reducer;

export const { projects } = projectsSlice.actions;

export const selectProjectsState = (state: any) => state.projectsdata.projects;
