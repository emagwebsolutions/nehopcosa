import { builder } from '@/client/client';
import { sliderinitState, plists, payload } from '@/typings';
import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState: sliderinitState = {
  slider: [{
    url:''
  }],
};

export const sliderSlice = createSlice({
  name: 'sliderdata',
  initialState,

  reducers: {
    slider: (state, { payload }: payload) => {
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
  },
});

export default sliderSlice.reducer;

export const { slider } = sliderSlice.actions;

export const selectSliderState = (state: any) => state?.sliderdata?.slider;
