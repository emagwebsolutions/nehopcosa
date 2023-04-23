import { configureStore, combineReducers, createSlice } from '@reduxjs/toolkit';
import { builder } from '@/client/client';
import Image from 'next/image';
import Link from 'next/link';
import { initState, payload } from '@/typings';
import PortableText from 'react-portable-text';

/*---------------------------
BEGIN CREATE STATE
---------------------------*/

// Initial state
const initialState: initState = {
  homepage: '',
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

// Actual Slice
export const postSlice = createSlice({
  name: 'data',
  initialState,

  reducers: {
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
});

export const { pages, homepage } = postSlice.actions;

export const selectPageState = (state: any) => state.data.page;
export const selectPostState = (state: any) => state.data.post;
export const selectSocialState = (state: any) => state.data.social;
export const selectSliderState = (state: any) => state.data.slider;
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

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
/*---------------------------
END CREATE STORE
---------------------------*/
