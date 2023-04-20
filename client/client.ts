import imageBuilder from '@sanity/image-url'
import {str} from '../typings'
import { createClient } from '@sanity/client'

export const client = createClient({
    projectId: 'u8oo2n5b',
    dataset: 'production',
    apiVersion: '2023-04-19',
    useCdn: true
  })

export const builder = (source: str) => imageBuilder(client).image(source).url()