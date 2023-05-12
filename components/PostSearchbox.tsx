import { useSelector, useDispatch } from 'react-redux';
import { useGetpostsQuery } from '@/store/fetchData';
import { useRef } from 'react';
import { postlists, selectPostlists } from '@/store/features/postlistsSlice';
import { selectBlogState } from '@/store/features/blogSlice';

const PostSearchbox = () => {
  const { data } = useGetpostsQuery('');
  const dispatch = useDispatch();

  const obj = useSelector(selectBlogState);

  const inptRef = useRef<any>();

  const handleClick = () => {
    if (inptRef.current) {
      const val = inptRef.current.value;
      const res: any = Object.values(obj).filter((v: any) =>
        Object.values(v).join(' ').toLowerCase().includes(val.toLowerCase())
      );

      dispatch(postlists(res));
    }
  };

  const plist = useSelector(selectPostlists);

  const handleChange = (e: any) => {
    if (e.target.value === '') {
      if (data) {
        const obj: any = Object.values(data?.data).filter(
          (v: any) => v._type === 'post'
        );

        dispatch(postlists(obj));
      }
    }
  };

  return (
    <div className="form-control">
      <input
        type="text"
        onChange={handleChange}
        ref={inptRef}
        placeholder="Search Post"
      />
      <button type="button" onClick={handleClick}>
        Search
      </button>
    </div>
  );
};

export default PostSearchbox;
