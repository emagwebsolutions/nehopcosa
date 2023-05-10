import Slide from '@/components/Slide';
import styles from '@/styles/Home.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useGetpostsQuery } from '@/store/fetchData';
import { useEffect } from 'react';

import {
  homepage,
  selectPageState,
  selectPostState,
  selectProfileState
} from '@/store/store';

import { useDispatch, useSelector } from 'react-redux';
import { builder } from '@/client/client';

function Home() {
  const { data } = useGetpostsQuery('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (data && data.data) {
      dispatch(homepage(data.data));
    }
  }, [data, dispatch]);

  //PROFILE DETAILS
  const { img, title } = useSelector(selectProfileState);
  const whoweare = useSelector(selectPageState);

  //FEATURED POST DETAILS
  const featuredposts = useSelector(selectPostState);

  //WHO WE ARE DETAILS

  const who = Object.values(whoweare)
    .filter((v: any) => v.slug === 'who-we-are')
    .map((v: any) => ({
      title: v.title,
      img: v.img,
      text: v.text,
    }))[0];

  if (data) {
    const social = Object?.values(data.data)
      .filter((v: any) => {
        return v._type === 'social';
      })
      .map((v: any) => {
        const img = v.mainImage ? builder(v.mainImage) : '/noimage.jpg';
        return {
          img,
          title: v.title,
          slug: v.slug?.current,
        };
      })
      .map((v: any, k: number) => {
        const fa = v.title.toLowerCase();
        return (
          <a href={v.slug} key={k}>
            <i className={`fa fa-${fa}`}></i> {v.tile}
          </a>
        );
      });

    return (
      <>
        <section className={styles.header}>
          <div className={styles.slider}>
            <Slide />
          </div>

          <div className={styles.profile}>
            <div>
              <Image src={img} alt="" width="196" height="200" />
              <strong>{title}</strong>
              <br />
              <strong>(C.E.O)</strong>
              <div className={styles.social}>{social}</div>
            </div>
          </div>
        </section>

        <section className={styles.whoweare}>
          <div className="container">
            <div>
              <Image src={who?.img} width="560" height="400" priority alt="" />
            </div>
            <div>
              <h1>{who?.title}</h1>

              <div>{who?.text}</div>

              <Link href="about" className="button">
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

              <Link href="about" className="button-outline">
                Learn More
              </Link>
            </div>
          </div>

          <div>
            <div>
              <h1>JOIN US TO HELP THE POOR AND NEEDY IN SOCIETY</h1>
            </div>
          </div>
        </section>

        <section className={styles.blog}>
          <h4>Our Blog</h4>
          <h2>Recent From Blog</h2>

          <div className="container">{featuredposts.slice(0, 4)}</div>
        </section>
      </>
    );
  }
}

export default Home;
