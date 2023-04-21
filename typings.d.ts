export type ReactChildren = {
  children: React.ReactNode;
};

export type str = string;

export type arr = {
  arr: {}[];
};


export type slides = {
  url: string
}[];



export type allinfobj = {
  _id: string;
  title: string;
  _type: string;
  createdAt: string;
  mainImage: string;
  body: string;
  slug: string;
  address: string;
  email: string;
  location: string;
  mobile1: string;
  mobile2: string;
  mobile3: string;
  mobile4: string;
  excerpt: string;
}[]
// Type for our state



export type initState = {
  allInfo: allinfobj;

  post: any;

  page: {
    img: string;
    title: string;
    text: string;
  }[];

  social: {
    img: string;
    title: string;
    slug: string;
  }[];

  slider: slides

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
