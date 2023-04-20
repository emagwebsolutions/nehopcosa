import { configureStore, combineReducers, createSlice } from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { builder } from '@/client/client';

/*---------------------------
BEGIN CREATE STATE
---------------------------*/

// Type for our state
type initState = {
  allInfo: [];

  post: {
    img: string;
    title: string;
    text: string;
  }[];

  page: {
    img: string;
    title: string;
    text: string;
  }[];

  social: [];

  slider: [];
  logo: [];
  profile: [];
  contact: [];
};

// Initial state
const initialState: initState = {
  allInfo: [],
  post: [],
  page: [],
  social: [],
  slider: [],
  logo: [],
  profile: [],
  contact: [],
};

// Actual Slice
export const postSlice = createSlice({
  name: 'data',
  initialState,

  reducers: {

    allInfos(state, action) {
      state.allInfo = action.payload;
    },

    posts(state) {
      const obj = Object.values(state.allInfo)
        .filter((v: any) => {
          return v._type === 'post';
        })
        .map((v: any) => ({
          img: builder(v.mainImage),
          title: v.title,
          text: v.excerpt,
        }));
      state.post = obj;
    },

    pages(state) {
      const obj = Object.values(state.allInfo)
        .filter((v: any) => {
          return v._type === 'page';
        })
        .map((v: any) => ({
          img: builder(v.mainImage),
          title: v.title,
          text: v.excerpt,
        }));
      state.page = obj;
    },

    socials(state, action) {
      state.social = action.payload;
    },
    sliders(state, action) {
      state.slider = action.payload;
    },
    logos(state, action) {
      state.logo = action.payload;
    },
    profiles(state, action) {
      state.profile = action.payload;
    },
    contacts(state, action) {
      state.contact = action.payload;
    },
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      return {
        ...state,
        ...action,
      };
    });
  },
});

export const {
  allInfos,
  posts,
  pages,
  socials,
  sliders,
  logos,
  profiles,
  contacts,
} = postSlice.actions;

export const selectPageState = (state: any) => state.data.page;
export const selectPostState = (state: any) => state.data.post;
export const selectSocialState = (state: any) => state.data.social;
export const selectSliderState = (state: any) => state.data.slider;
export const selectLogoState = (state: any) => state.data.logo;
export const selectProfileState = (state: any) => state.data.profile;
export const selectContactState = (state: any) => state.data.contact;

/*---------------------------
END CREATE STATE
---------------------------*/

/*---------------------------
BEGIN CREATE STORE
---------------------------*/

const rootReducer = combineReducers({
  [postSlice.name]: postSlice.reducer,
});

const makeConfiguredStore = () =>
  configureStore({
    reducer: rootReducer,
    devTools: true,
  });

export const makeStore = () => {
  const isServer = typeof window === 'undefined';
  if (isServer) {
    return makeConfiguredStore();
  } else {
    // we need it only on client side
    const persistConfig = {
      key: 'nextjs',
      whitelist: ['data'], // make sure it does not clash with server keys
      storage,
    };

    const persistedReducer = persistReducer(persistConfig, rootReducer);

    let store: any = configureStore({
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware: any) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
    });

    store.__persistor = persistStore(store); // Nasty

    return store;
  }
};

// Previous codes

export const wrapper = createWrapper(makeStore);

/*---------------------------
END CREATE STORE
---------------------------*/
