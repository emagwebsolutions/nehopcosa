import { allinfo, blog, selectPostState, wrapper } from '@/store/store';
import { useSelector, useDispatch } from 'react-redux';
import styles from '@/styles/Blog.module.scss';
import { client } from '@/client/client';

const Blog = ({ data }: any) => {
  //FEATURED POST DETAILS

  const dispatch = useDispatch();
  dispatch(blog(data));

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

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      const data = await client.fetch(`
        *[
          _type == 'post' 
        ]{
          title,
          _type,
          createdAt,
          mainImage,
          body,
          slug,
          address,
          email,
          location,
          mobile1,
          mobile2,
          mobile3,
          mobile4,
          excerpt
        }
      `);

      await store.dispatch(allinfo(data));

      return {
        props: {
          data,
        },
      };
    }
);

export default Blog;
