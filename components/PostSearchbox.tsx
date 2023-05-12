


import { useSelector, useDispatch } from 'react-redux';
import { useGetpostsQuery } from '@/store/fetchData';
import { ReactHTMLElement, useRef } from 'react';
import { builder } from '@/client/client';
import { selectPostState } from '@/store/features/postSlice';
import { postlists } from '@/store/features/postlistsSlice';

const PostSearchbox = () => {
  const { data } = useGetpostsQuery('');
  const dispatch = useDispatch();

  const obj: {
    img: string
    slug: string
    title: string
  }[] = useSelector(selectPostState);

  const inptRef = useRef<any>();

  const handleClick = () => {
    if (inptRef.current) {
      const val = inptRef.current.value;

      const res = Object.values(obj).filter((v: any) =>
        Object.values(v).join(' ').toLowerCase().includes(val.toLowerCase())
      );

      dispatch(postlists(res));
    }
  };


  const handleChange = (e: any)=>{

    if(e.target.value === ''){
      if (data) {
        const obj = Object.values(data.data)
        .filter((v: any) => v._type === 'post')
        .map((v: any)=>({
          img: builder(v.mainImage),
          slug: v.slug?.current,
          title: v.title
        }))
        dispatch(postlists(obj));
      }
    }

  }

  return (
    <div className="form-control">
      <input type="text" onChange={handleChange} ref={inptRef} placeholder="Search Post" />
      <button type="button" onClick={handleClick}>
        Search
      </button>
    </div>
  );
};

export default PostSearchbox;
