
import { projectsinitState,payload } from '@/typings';
import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState: projectsinitState = {
  projects: ''
};

export const projectsSlice = createSlice({
  name: 'projectsdata',
  initialState,

  reducers: {

projects: (state,{payload}: payload)=>{

  const arr = payload || [];

    state.projects = Object.values(arr)
    .filter((v) => v._type === 'projects')
    .map((v, k) => (
      <div key={k}>
        <i className={`fa ${v.slug?.current}`}></i>
        <h1>{v.excerpt}</h1>
        <p>{v.title}</p>
      </div>
    ));
    }




  },
});

export default projectsSlice.reducer;

export const { projects } = projectsSlice.actions;

export const selectProjectsState = (state: any) => state.projectsdata.projects;
