// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { client } from '@/client/client';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  data: string
}

export default async function fetchpost(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {


  const data = await client.fetch(`
        *[
          _type == 'post' ||
          _type == 'pages' ||
          _type == 'slider' ||
          _type == 'profile' ||
          _type == 'social' ||
          _type == 'contact' 
        ]{
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


  
  res.status(200).json({ data })
}
