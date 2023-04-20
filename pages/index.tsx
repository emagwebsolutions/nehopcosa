import Slide from '@/components/Slide';
import styles from '@/styles/Home.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/client/client';

import {
  allInfos,
  posts,
  pages,
  socials,
  sliders,
  logos,
  profiles,
  contacts,
  selectPageState,
  selectPostState,
  selectSocialState,
  selectSliderState,
  selectLogoState,
  selectProfileState,
  selectContactState,
} from '@/store/store';

import { useDispatch, useSelector } from 'react-redux';
import { wrapper } from '@/store/store';

export default function Home({ data }: any) {
  const postState = useSelector(selectPostState);

  return (
    <>
      <section className={styles.header}>
        <div className={styles.slider}>
          <Slide arr={slider} />
        </div>
        <div className={styles.profile}>
          <div>
            <Image src={img} alt="" width="196" height="200" />
            <h4>{title}</h4>
            <h3>(C.E.O)</h3>
            <div className={styles.social}>
              <a href="">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="">
                <i className="fa fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.whoweare}>
        <div className="container">
          <div>
            <Image src={whoweareImg} width="560" height="400" alt="" />
          </div>
          <div>
            <h1>{whowearetitle}</h1>

            <div>{text}</div>

            <Link href="" className="button">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.help}>
        <div>
          <div>
            <h2>They Need Your Help</h2>
            <p>Support a cause you care about</p>

            <Link href="" className="button-outline">
              Learn More
            </Link>
          </div>
        </div>

        <div>
          <div>JOIN US TO HELP THE POOR AND NEEDY IN SOCIETY</div>
        </div>
      </section>

      <section className={styles.blog}>
        <h4>Our Blog</h4>
        <h2>Recent From Blog</h2>

        <div className="container">{posts}</div>
      </section>
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      const data = await client.fetch(`
            *[
              _type == 'post' ||
              _type == 'pages' ||
              _type == 'social' ||
              _type == 'slider' ||
              _type == 'logo' ||
              _type == 'profile' ||
              _type == 'contact' 
            ]{
              _id,
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

      await store.dispatch(allInfos(data));

      return {
        props: {
          data,
        },
      };
    }
);
