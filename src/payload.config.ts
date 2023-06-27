import path from 'path'
import { buildConfig } from 'payload/config'

// custom components
import UserAvatar from './components/UserAvatar'

// import Examples from './collections/Examples';
import Categories from './collections/Categories'
import Files from './collections/Files'
import Icons from './collections/Icons'
import Logos from './collections/Logos'
import Images from './collections/Media'
import Pages from './collections/Pages'
import Posts from './collections/Posts'
import Testimonials from './collections/Testimonials'
import Users from './collections/Users'

import Navigation from './globals/Navigation'
import SiteOptions from './globals/SiteOptions'
import SocialLinks from './globals/SocialLinks'

export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: Users.slug,
    avatar: UserAvatar,
    css: path.resolve(__dirname, 'css/admin.scss')
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
