import env from 'dotenv'
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

import Contacts from './collections/Contacts'
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
    Contacts,
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
  email: {
    fromName: process.env.EMAIL_SMTP_NAME,
    fromAddress: process.env.EMAIL_SMTP_EMAIL_ADDRESS,
    transportOptions: {
      host: process.env.EMAIL_SMTP_HOST,
      port: process.env.EMAIL_SMTP_PORT,
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.EMAIL_SMTP_ACCOUNT,
        pass: process.env.EMAIL_SMTP_PASSWORD
      }
    }
  },
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts')
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql')
  }
})
