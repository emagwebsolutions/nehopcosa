
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
      console.log(data)
    }
  }, [data, dispatch]);



    return (
      <>
      <br />
      <br />
      <br />
      <br />
      <br />
       THIS IS HOME PAGE
      </>
    );
  
}

export default Home;
