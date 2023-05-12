import { builder } from '@/client/client';
import Image from 'next/image';
import Link from 'next/link';
import { useGetpostsQuery } from '@/store/fetchData';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectPostlists } from '@/store/features/postlistsSlice';
import { blog, selectBlogState } from '@/store/features/blogSlice';

const RecentPost = () => {
  const { data } = useGetpostsQuery('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(blog(data.data));
    }
  }, [data, dispatch]);


  const plist = useSelector(selectPostlists)



  const blg = useSelector(selectBlogState);

  const obj = plist[0].title ? plist : blg


  return (
    <div>
      {Object.values(obj).map((v: any, k) => {
        const img = v.mainImage ? builder(v.mainImage) : '/noimage.jpg';
        return (
          <div key={k}>
            <div>
              <Image src={img} width={80} height={50} alt="" />
            </div>
            <div>
              <Link href={`${v.slug?.current}`}>
                <h4>{v.title}</h4>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecentPost;
