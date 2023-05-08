import { client } from '@/client/client';
import PostSearchbox from '@/components/PostSearchbox';
import RecentPost from '@/components/RecentPost';
import PortableText from 'react-portable-text';
import styles from '@/styles/Post.module.scss';

const Post = ({ data }: any) => {
  // const details =  data? data?.body : ''
  return (
    <div className={styles.post}>
      <div className="container">
        <div>
          <PortableText
            className=""
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECTID}
            content={data.body}
            serializers={{
              h1: (props: any) => {
                <h1 className="" {...props} />;
              },
              h2: (props: any) => {
                <h2 className="" {...props} />;
              },
              li: ({ children }: any) => {
                <li className="">{children}</li>;
              },
              link: ({ href, children }: any) => {
                <a href={href} className="">
                  {children}
                </a>;
              },
            }}
          />
        </div>

        <div>
          <PostSearchbox />
          <RecentPost />
        </div>
      </div>
    </div>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const data = await client.fetch(`*[_type == 'post'
  ]{
    slug{
      current
    }
  }`);

  const paths = Object.values(data).map((v: any) => ({
    params: {
      slug: v.slug?.current,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params }: any) => {
  const query = `*[_type == 'post' && slug.current == $slug][0]{
  title,
  body,
  excerpt,
  slug
}`;

  const param = { slug: params.slug };

  const data = await client.fetch(query, param);

  return {
    props: {
      data,
    },
  };
};
