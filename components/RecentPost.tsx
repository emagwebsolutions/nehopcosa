import { builder } from '@/client/client';
import Image from 'next/image';
import Link from 'next/link';
import { useGetpostsQuery } from '@/store/fetchData';



import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { postlists } from '@/store/features/postlistsSlice';
import { selectPostState } from '@/store/features/postSlice';

const RecentPost = () => {
  const { data } = useGetpostsQuery('');
  const dispatch = useDispatch();

  useEffect(() => {
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
  }, [data, dispatch]);



  const obj = useSelector(selectPostState)

  return (
    <div>
      {Object.values(obj).map((v: any, k) => (
        <div key={k}>
          <div>
            <Image src={v.img} width={80} height={50} alt="" />
          </div>
          <div>
            <Link href={`${v.slug}`}>
              <h4>{v.title}</h4>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentPost;
