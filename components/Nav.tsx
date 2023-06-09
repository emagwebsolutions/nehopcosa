import Image from 'next/image';
import styles from '@/styles/Nav.module.scss';
import Link from 'next/link';
import { useState } from 'react';

const Nav = () => {
  const [container, setContainer] = useState('hide');

  return (
    <nav className={styles.nav}>
      <Image
        src="/menu.jpg"
        alt=""
        className="menu"
        width="30"
        height="30"
        onClick={() => setContainer('show')}
      />

      <div className={`container ${container}`}>
        <div>
          <Image src="/logo.jpg" alt="Logo" width="70" height="70" />

          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div onClick={() => setContainer('hide')}></div>
      </div>
    </nav>
  );
};

export default Nav;
