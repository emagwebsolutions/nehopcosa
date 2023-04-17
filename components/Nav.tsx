import Image from 'next/image';
import styles from '../styles/Nav.module.scss';
import Link from 'next/link';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className="container">
        <Image alt="Logo" src="/logo.jpg" width="70" height="70" />

        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Blog</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
