import { ReactChildren } from '@/typings';

import Nav from './Nav';
import Meta from './Meta';
import Footer from './Footer';

const Layout = ({ children }: ReactChildren) => {
  return (
    <>
     <Meta title="NEHOPCOSA" />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
