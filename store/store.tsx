import { configureStore, combineReducers, createSlice } from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { builder } from '@/client/client';
import Image from 'next/image';
import Link from 'next/link';
import { initState, payload } from '@/typings';
import PortableText from 'react-portable-text';
import SetTransform from '@/components/SetTransform';

/*---------------------------
BEGIN CREATE STATE
---------------------------*/

// Initial state
const initialState: initState = {
  allinfo: [],
  homepage: '',
  post: '',
  page: [],
  social: [],
  slider: [],
  projects: [],
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

// Actual Slice
export const postSlice = createSlice({
  name: 'data',
  initialState,

  reducers: {


    allinfo: (state, { payload }: payload) => {
      if(state.allinfo.length < 1){
        state.allinfo = payload
      }
    },

    blog: (state, { payload }: payload) => {
      const arr = payload || [];

     //POST
     if(!state.post ){ 

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

                <Link href={`blog/${v.slug?.current}`}  className="button">
                  Learn More
                </Link>
              </div>
            </div>
          );
        });

      }


      //CONTACT
      if (!Object.values(state.contact).some((v) => v)) {
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
      //SOCIAL
      if (state.social.length < 1) {
        state.social = Object?.values(arr)
          .filter((v) => {
            return v._type === 'social';
          })
          .map((v) => {
            const img = v.mainImage ? builder(v.mainImage) : '/noimage.jpg';
            return {
              img,
              title: v.title,
              slug: v.slug?.current,
            };
          });
      }

      //PROFILE
      state.profile = Object?.values(arr)
        .filter((v) => {
          return v._type === 'profile';
        })
        .map((v) => {
          const img = v.mainImage ? builder(v.mainImage) : '/noimage.jpg';
          return {
            img,
            title: v.title,
            text: v.excerpt,
          };
        })[0];

      //WHO WE ARE
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

      //POST
      if(!state.post){ 
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


      //CONTACT
      if (!Object.values(state.contact).some((v) => v)) {
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
      }


    },

    pages(state, { payload }: payload) {
      const arr = payload || [];

      //PROJECTS 
      state.projects = Object.values(arr).filter((v)=> v._type === 'projects')
      .map((v,k)=>(
        <div key={k}>
        <i className={`fa ${v.slug?.current}`}></i>
        <h1>{v.excerpt}</h1>
        <p>{v.title}</p>
      </div>
      ))

      //SOCIAL
      if (state.social.length < 1) {
        state.social = Object?.values(arr)
          .filter((v) => {
            return v._type === 'social';
          })
          .map((v) => {
            const img = v.mainImage ? builder(v.mainImage) : '/noimage.jpg';
            return {
              img,
              title: v.title,
              slug: v.slug?.current,
            };
          });
      }

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

      //CONTACT
      if (!Object.values(state.contact).some((v) => v)) {
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
      }
    },
  },


  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: any) => {
    return {
    ...state,
    ...action.payload,
    };
    });
  },


});


export const { pages, homepage, blog ,allinfo} = postSlice.actions;
export const selectPageState = (state: any) => state.data.page;
export const selectPostState = (state: any) => state.data.post;
export const selectSocialState = (state: any) => state.data.social;
export const selectSliderState = (state: any) => state.data.slider;
export const selectProfileState = (state: any) => state.data.profile;
export const selectContactState = (state: any) => state.data.contact;
export const selectProjectsState = (state: any) => state.data.projects;

/*---------------------------
END CREATE STATE
---------------------------*/

/*---------------------------
BEGIN CREATE STORE
---------------------------*/
const rootReducer = combineReducers({
  [postSlice.name]: postSlice.reducer,
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
