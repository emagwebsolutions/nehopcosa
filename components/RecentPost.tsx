import { builder } from '@/client/client';
import Image from 'next/image';
import Link from 'next/link';
import { useGetpostsQuery } from '@/store/fetchData';

const RecentPost = () => {
  const { data } = useGetpostsQuery('');

  if (data) {
    const obj = Object.values(data.data)
      .filter((v: any) => v._type === 'post')
      .slice(0, 6);

    return (
      <div>
        {Object.values(obj).map((v: any, k) => (
          <div key={k}>
            <div>
              <Image src={builder(v.mainImage)} width={80} height={50} alt="" />
            </div>
            <div>
              <Link href={`${v.slug?.current}`}>
                <h4>{v.title}</h4>
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default RecentPost;
