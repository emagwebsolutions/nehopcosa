import Image from 'next/image';
import styles from '@/styles/Footer.module.scss';

import { useGetpostsQuery } from '@/store/fetchData';
import { builder } from '@/client/client';
import { useEffect, useState } from 'react';

const Footer = () => {
  //SOCIAL ICONS
  const { data} = useGetpostsQuery('');

  const [getData, setData] = useState<any>(null);

  useEffect(() => {
    if (data) {
      setData(data);
    }
  }, [data]);

  if (!getData) {
    return <div>Data is loading </div>;
  }

  const social = Object.values(getData?.data)
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

  const contacts = Object.values(getData?.data)
    .filter((v: any) => {
      return v._type === 'contact';
    })
    .map((v: any) => ({
      address: v.address,
      email: v.email,
      location: v.location,
      mobile1: v.mobile1,
      mobile2: v.mobile2,
      mobile3: v.mobile3,
      mobile4: v.mobile4,
    }))[0];

  const address = contacts.address;
  const email = contacts.email;
  const mobile1 = contacts.mobile1;
  const mobile2 = contacts.mobile2;

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div>
          <div>
            <h4>Our Partner</h4>
            <span className="dash"></span>
            <Image src="/donor.jpg" width="200" height="150" alt="" />
          </div>
        </div>
        <div>
          <div>
            <div>
              <h4>Address</h4>
              <span className="dash"></span>
              <p>{address}</p>
            </div>
            <div>
              <h4>Phone</h4>
              <span className="dash"></span>
              <p>{mobile1}</p>
              <p>{mobile2}</p>
            </div>
            <div>
              <h4>Email</h4>
              <span className="dash"></span>
              <p>{email}</p>
            </div>
          </div>

          <div>{social}</div>
        </div>
      </div>

      <div className="container">&copy; 2023 NEHOPCOSA</div>
    </footer>
  );
};

export default Footer;
