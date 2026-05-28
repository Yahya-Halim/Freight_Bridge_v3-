import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import {
  businessSchema,
  siteSchema,
  mobileServiceCollections,
} from '@localevolve/local-biz-factory-engine/schemas';

const singletonJson = (fileName: string, entryId: string) => file(fileName, {
  parser: (text: string) => ({ [entryId]: JSON.parse(text) }),
});

export const collections = {
  business: defineCollection({
    loader: singletonJson('src/data/business.json', 'biz'),
    schema: businessSchema,
  }),
  site: defineCollection({
    loader: singletonJson('src/data/site.json', 'site'),
    schema: siteSchema,
  }),
  services: defineCollection({
    loader: file('src/data/services.json'),
    schema: mobileServiceCollections.services,
  }),
  locations: defineCollection({
    loader: file('src/data/locations.json'),
    schema: mobileServiceCollections.locations,
  }),
};
