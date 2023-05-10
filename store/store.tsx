import { configureStore, combineReducers, createSlice } from '@reduxjs/toolkit';
import { builder } from '@/client/client';
import Image from 'next/image';
import Link from 'next/link';
import { initState, payload, plists } from '@/typings';
import PortableText from 'react-portable-text';
import { fetchData } from './fetchData';

/*---------------------------
BEGIN CREATE STATE
---------------------------*/

// Initial state
const initialState: initState = {
  homepage: '',
  post: '',
  postlists: [{
    img: '',
    slug: '',
    title: ''
  }],
  page: [],
  slider: [],
  projects: [],
  profile: {
    img: '',
    title: '',
    text: '',
  },
};

// Actual Slice
export const postSlice = createSlice({
  name: 'data',
  initialState,

  reducers: {

    postlists: (state, { payload }: plists) => {
      state.postlists = payload;
    },

    blog: (state, { payload }: payload) => {
      const arr = payload || [];

      //POST
      if (!state.post) {
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

                  <Link href={`blog/${v.slug?.current}`} className="button">
                    Learn More
                  </Link>
                </div>
              </div>
            );
          });
      }
    },

    homepage: (state, { payload }: payload) => {
      const arr = payload || [];

      //SLIDER
      state.slider = Object?.values(arr)
        .filter((v) => {
          return v._type === 'slider';
        })
        .map((v) => {
          const img = v.mainImage ? builder(v.mainImage) : '/noimage.jpg';
          return {
            url: `${img}`,
          };
        });

    },

    pages(state, { payload }: payload) {
      const arr = payload || [];

      //PROJECTS
      state.projects = Object.values(arr)
        .filter((v) => v._type === 'projects')
        .map((v, k) => (
          <div key={k}>
            <i className={`fa ${v.slug?.current}`}></i>
            <h1>{v.excerpt}</h1>
            <p>{v.title}</p>
          </div>
        ));

      //PAGES
      if (state.page.length < 1) {
        state.page = Object?.values(arr)
          .filter((v) => {
            return v._type === 'pages';
          })
          .map((v) => {
            const img = v.mainImage ? builder(v.mainImage) : '/noimage.jpg';
            return {
              img,
              title: v.title,
              text: v.excerpt,
              body: (
                <PortableText
                  className=""
                  content={v.body}
                  dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                  projectId={process.env.NEXT_PUBLIC_SANITY_PROJECTID}
                  serializers={{
                    h1: (props: any) => {
                      <h1 className="" {...props} />;
                    },
                    h2: (props: any) => {
                      <h2 className="" {...props} />;
                    },
                    li: ({ children }: any) => {
                      <li className="">{children}</li>;
                    },
                    link: ({ href, children }: any) => {
                      <a href={href} className="">
                        {children}
                      </a>;
                    },
                  }}
                ></PortableText>
              ),
              slug: v.slug?.current,
            };
          });
      }
    },
  },
});

export const { pages, homepage, blog, postlists } = postSlice.actions;
export const selectPageState = (state: any) => state.data.page;
export const selectPostState = (state: any) => state.data.post;
export const selectSliderState = (state: any) => state.data.slider;
export const selectProfileState = (state: any) => state.data.profile;
export const selectProjectsState = (state: any) => state.data.projects;
export const selectPostlists = (state: any) => state.data.postlists;
/*---------------------------
END CREATE STATE
---------------------------*/

/*---------------------------
BEGIN CREATE STORE
---------------------------*/
const rootReducer: any = combineReducers({
  [postSlice.name]: postSlice.reducer,
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
