export type ReactChildren = {
  children: React.ReactNode;
};

export type str = string;

export type arr = {
  arr: {}[];
};

export type slides = {
  url: string;
}[];

export type query = {
  title: string;
  _type: string;
  createdAt?: string;
  mainImage: string;
  body: [];
  slug: { current: string };
  address: string;
  email: string;
  location: string;
  mobile1: string;
  mobile2: string;
  mobile3: string;
  mobile4: string;
  excerpt: string;
};

export type payload = {
  payload: query[];
};

export type serverSideData = {
  data: any;
};

export type initState = {
  homepage: '';
  post: any;

  page: any;

  social: {
    img: string;
    title: string;
    slug: string;
  }[];

  slider: slides;

  logo: {
    img: string;
    slug: string;
  };

  profile: {
    img: string;
    title: string;
    text: string;
  };

  contact: {
    address: string;
    email: string;
    location: string;
    mobile1: string;
    mobile2: string;
    mobile3: string;
    mobile4: string;
  };
};
