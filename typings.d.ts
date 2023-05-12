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

export type poslist = {
  img: string;
  slug: string;
  title: string;
};

export type plists = {
  payload: poslist[];
};

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

export type postinitState = {
  post: {}[];
};

export type bloginitState = {
  blog: {}[]
};

export type postlistsinitState = {
  postlists: poslist[];
};

export type pagesinitState = {
  page: any
};

export type sliderinitState = {
  slider: slides;
};

export type projectsinitState = {
  projects: {}[]
};

export type profileinitState = {
  profile: {
    img: string;
    title: string;
    text: string;
  };
};
