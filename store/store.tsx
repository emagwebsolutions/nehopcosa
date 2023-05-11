import { configureStore, combineReducers, createSlice } from '@reduxjs/toolkit';

import { fetchData } from './fetchData';

import blogReducer from '@/store/features/blogSlice'
import pagesReducer from '@/store/features/pagesSlice'
import postlistsReducer from '@/store/features/postlistsSlice'
import postReducer from '@/store/features/postSlice'
import profileReduceer from '@/store/features/profileSlice'
import projectsReducer from '@/store/features/projectsSlice'
import sliderReducer from '@/store/features/sliderSlice'


import {blog} from '@/store/features/blogSlice'
import {pages} from '@/store/features/pagesSlice'
import {postlists} from '@/store/features/postlistsSlice'
import {post} from '@/store/features/postSlice'
import {profile} from '@/store/features/profileSlice'
import {projects} from '@/store/features/projectsSlice'
import {slider} from '@/store/features/sliderSlice'

/*---------------------------
BEGIN CREATE STORE
---------------------------*/
const rootReducer: any = combineReducers({
  [blog.name]: blogReducer,
  [pages.name]: pagesReducer,
  [postlists.name]: postlistsReducer,
  [post.name]: postReducer ,
  [profile.name]: profileReduceer,
  [projects.name]: projectsReducer,
  [slider.name]: sliderReducer,
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
