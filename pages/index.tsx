
import { useGetpostsQuery } from '@/store/fetchData';
import { useEffect } from 'react';

import {
  homepage

} from '@/store/store';

import { useDispatch} from 'react-redux';


function Home() {
  const { data } = useGetpostsQuery('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(homepage(data.data));
    }
  }, [data, dispatch]);



    return (
      <>
      <br />
      <br />
      <br />
      <br />
      <br />
       HOME PAGE CHANGED
      </>
    );
  
}

export default Home;
