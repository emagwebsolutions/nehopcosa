import React from 'react';
import { useSelector,useDispatch } from 'react-redux';

const PostSearchbox = () => {
  const dispatch = useDispatch()
  const info = useSelector((state: any) => state?.data?.data?.allinfo);

  return (
    <div className="form-control">
      <input type="search" placeholder="Search Post" />
      <button type="button">Search</button>
    </div>
  );
};

export default PostSearchbox;
