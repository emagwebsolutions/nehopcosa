import { useSelector} from 'react-redux';
import styles from '@/styles/Blog.module.scss';
import { selectPostState } from '@/store/features/postSlice';
import { builder } from '@/client/client';
import Image from 'next/image';
import Link from 'next/link';

const Blog = () => {
  //FEATURED POST DETAILS
  const featuredpost = useSelector(selectPostState);

  const featuredposts = Object.values(featuredpost).map((v: any, k: number) => {
    const img = v.mainImage ? builder(v.mainImage) : '/noimage.jpg';
    return (
      <div key={k}>
        <Image width="230" height="170" alt="" src={img} />
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

  return (
    <div className={styles.blog}>
      <section>
        <div>
          <div className="dash"></div>
          <h1>OUR</h1>
          <h1>BLOG</h1>
        </div>
      </section>

      <section>
        <div className="container">{featuredposts.slice(0, 8)}</div>
      </section>
    </div>
  );
};

export default Blog;
