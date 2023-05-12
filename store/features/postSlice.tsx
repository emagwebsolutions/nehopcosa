import { builder } from '@/client/client';
import { postinitState, plists, payload } from '@/typings';
import { createSlice } from '@reduxjs/toolkit';
import Link from 'next/link';
import Image from 'next/image';
// Initial state
const initialState: postinitState = {
  post: ''
};

export const postSlice = createSlice({
  name: 'postdata',
  initialState,

  reducers: {
    post: (state, { payload }: payload) => {
      const arr = payload || [];
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

                  <Link href={`blog/${v.slug?.current}`} className="button">
                    Learn More
                  </Link>
                </div>
              </div>
            );
          });
      }
    },
  
});

export default postSlice.reducer;

export const { post } = postSlice.actions;

export const selectPostState = (state: any) => state?.postdata?.post;
