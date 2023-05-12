import { configureStore, combineReducers, createSlice } from '@reduxjs/toolkit';

import { fetchData } from './fetchData';

import blogReducer from '@/store/features/blogSlice'
import pagesReducer from '@/store/features/pagesSlice'
import postlistsReducer from '@/store/features/postlistsSlice'
import postReducer from '@/store/features/postSlice'
import profileReduceer from '@/store/features/profileSlice'
import projectsReducer from '@/store/features/projectsSlice'
import sliderReducer from '@/store/features/sliderSlice'


import {blogSlice} from '@/store/features/blogSlice'
import {pagesSlice} from '@/store/features/pagesSlice'
import {postlistsSlice} from '@/store/features/postlistsSlice'
import {postSlice} from '@/store/features/postSlice'
import {profileSlice} from '@/store/features/profileSlice'
import {projectsSlice} from '@/store/features/projectsSlice'
import {sliderSlice} from '@/store/features/sliderSlice'

/*---------------------------
BEGIN CREATE STORE
---------------------------*/
const rootReducer: any = combineReducers({
  [blogSlice.name]: blogReducer,
  [pagesSlice.name]: pagesReducer,
  [postlistsSlice.name]: postlistsReducer,
  [postSlice.name]: postReducer ,
  [profileSlice.name]: profileReduceer,
  [projectsSlice.name]: projectsReducer,
  [sliderSlice.name]: sliderReducer,
  [fetchData.reducerPath]: fetchData.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(fetchData.middleware),
});

/*---------------------------
END CREATE STORE
---------------------------*/
