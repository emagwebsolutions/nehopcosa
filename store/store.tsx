import { configureStore, combineReducers, createSlice } from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { builder } from '@/client/client';
import Image from 'next/image';
import Link from 'next/link';
import { allinfobj, initState } from '@/typings';
import SetTransform from '@/components/SetTransform';

/*---------------------------
BEGIN CREATE STATE
---------------------------*/

// Initial state
const initialState: initState = {
  allInfo: [
    {
      _id: '',
      title: '',
      _type: '',
      createdAt: '',
      mainImage: '',
      body: '',
      slug: '',
      address: '',
      email: '',
      location: '',
      mobile1: '',
      mobile2: '',
      mobile3: '',
      mobile4: '',
      excerpt: '',
    },
  ],
  post: [],
  page: [],
  social: [],
  slider: [],
  logo: {
    img: '',
    slug: '',
  },
  profile: {
    img: '',
    title: '',
    text: '',
  },
  contact: {
    address: '',
    email: '',
    location: '',
    mobile1: '',
    mobile2: '',
    mobile3: '',
    mobile4: '',
  },
};
type payload = { payload: allinfobj };
// Actual Slice
export const postSlice = createSlice({
  name: 'data',
  initialState,

  reducers: {
    allInfos(state, action) {
      state.allInfo = action.payload;
    },

    posts(state, { payload }: payload) {
      const arr = payload || [];

      state.post = Object?.values(arr)
        .filter((v) => {
          return v._type === 'post';
        })
        .map((v, k: number) => {
          return (
            <div key={k}>
              <Image
                width="230"
                height="170"
                alt=""
                src={builder(v.mainImage)}
              />
              <div>
                <h5>{v.title}</h5>
                <div>{v.excerpt}</div>

                <Link href="" className="button">
                  Learn More
                </Link>
              </div>
            </div>
          );
        });
    },

    pages(state, { payload }: payload) {
      const arr = payload || [];

      state.page = Object?.values(arr)
        .filter((v: any) => {
          return v._type === 'pages';
        })
        .map((v: any) => {
          const img = v.mainImage ? builder(v.mainImage) : '/logo.jpg';
          return {
            img,
            title: v.title,
            text: v.excerpt,
            slug: v.slug.current
          };
        });
    },

    socials(state, { payload }: payload) {
      const arr = payload || [];

      state.social = Object?.values(arr)
        .filter((v) => {
          return v._type === 'social';
        })
        .map((v) => {
          const img = v.mainImage ? builder(v.mainImage) : '/logo.jpg';
          return {
            img,
            title: v.title,
            slug: v.slug,
          };
        });
    },

    sliders(state, { payload }: payload) {
      const arr = payload || [];

      state.slider = Object?.values(arr)
        .filter((v) => {
          return v._type === 'slider';
        })
        .map((v) => {
          const img = v.mainImage ? builder(v.mainImage) : '/logo.jpg';
          return {
            url: `${img}`,
          };
        });
    },
    logos(state, { payload }: payload) {
      const arr = payload || {};

      state.logo = Object?.values(arr)
        .filter((v) => {
          return v._type === 'logo';
        })
        .map((v) => {
          const img = v.mainImage ? builder(v.mainImage) : '/logo.jpg';
          return {
            img,
            slug: v.slug,
          };
        })[0];
    },
    profiles(state, { payload }: payload) {
      const arr = payload || {};

      state.profile = Object?.values(arr)
        .filter((v) => {
          return v._type === 'profile';
        })
        .map((v) => {
          const img = v.mainImage ? builder(v.mainImage) : '/logo.jpg';
          return {
            img,
            title: v.title,
            text: v.excerpt,
          };
        })[0];
    },
    contacts(state, { payload }: payload) {
      const arr = payload || [];

      state.contact = Object?.values(arr)
        .filter((v) => {
          return v._type === 'contact';
        })
        .map((v) => ({
          address: v.address,
          email: v.email,
          location: v.location,
          mobile1: v.mobile1,
          mobile2: v.mobile2,
          mobile3: v.mobile3,
          mobile4: v.mobile4,
        }))[0];
    },
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: any) => {
      return {
        ...state,
        ...action.payload,
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
  data: postSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
  transforms: [SetTransform],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export const wrapper = createWrapper(() => store, {
  debug: process.env.NODE_ENV === 'development',
});

/*---------------------------
END CREATE STORE
---------------------------*/
