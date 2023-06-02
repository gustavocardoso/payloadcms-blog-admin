import { buildConfig } from 'payload/config'
import path from 'path'
// import Examples from './collections/Examples';
import Categories from './collections/Categories'
import Files from './collections/Files'
import Images from './collections/Media'
import Logos from './collections/Logos'
import Pages from './collections/Pages'
import Posts from './collections/Posts'
import Users from './collections/Users'

import SiteOptions from './globals/SiteOptions'
import SocialLinks from './globals/SocialLinks'
import Navigation from './globals/Navigation'

export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: Users.slug
  },
  collections: [
    Categories,
    Files,
    Images,
    Logos,
    Pages,
    Posts,
    Users
    // Add Collections here
    // Examples,
  ],
  globals: [Navigation, SiteOptions, SocialLinks],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts')
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql')
  }
})
