import { blog, selectPostState } from '@/store/store';
import { useSelector, useDispatch } from 'react-redux';
import styles from '@/styles/Blog.module.scss';
import { useGetpostsQuery } from '@/store/fetchData';
import { useEffect } from 'react';

const Blog = () => {
  //FEATURED POST DETAILS
  const { data } = useGetpostsQuery('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(blog(data.data));
    }
  }, [data, dispatch]);

  const featuredposts = useSelector(selectPostState);

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
