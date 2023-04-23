import imageBuilder from '@sanity/image-url'
import {str} from '../typings'
import { createClient } from '@sanity/client'

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECTID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: '2023-04-19',
    useCdn: true
  })

export const builder = (source: str) => imageBuilder(client).image(source).url()