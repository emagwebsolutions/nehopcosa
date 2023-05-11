import { builder } from '@/client/client';
import { pagesinitState, payload } from '@/typings';
import { createSlice } from '@reduxjs/toolkit';
import PortableText from 'react-portable-text';

// Initial state
const initialState: pagesinitState = {
  pages: ''
};

export const pagesSlice = createSlice({
  name: 'pagesdata',
  initialState,

  reducers: {
    pages: (state, { payload }: payload) => {
      const arr = payload || [];
      //WHO WE ARE

        state.pages = Object?.values(arr)
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
      
    },
  },
});

export default pagesSlice.reducer;

export const { pages } = pagesSlice.actions;

export const selectPagesState = (state: any) => state.pagesdata.pages;
