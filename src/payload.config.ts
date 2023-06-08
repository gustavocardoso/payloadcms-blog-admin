import { buildConfig } from 'payload/config'
import path from 'path'

// import Examples from './collections/Examples';
import Categories from './collections/Categories'
import Files from './collections/Files'
import Icons from './collections/Icons'
import Images from './collections/Media'
import Logos from './collections/Logos'
import Pages from './collections/Pages'
import Posts from './collections/Posts'
import Testimonials from './collections/Testimonials'
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
    Icons,
    Images,
    Logos,
    Pages,
    Posts,
    Testimonials,
    Users
    // Add Collections here
    // Examples,
  ],
  globals: [Navigation, SocialLinks, SiteOptions],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts')
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql')
  }
})
