import { webpackBundler } from '@payloadcms/bundler-webpack'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import seo from '@payloadcms/plugin-seo'
import { slateEditor } from '@payloadcms/richtext-slate'
import env from 'dotenv'
import path from 'path'
import webp, { defaultResizeFactory } from 'payload-webp'
import { buildConfig } from 'payload/config'

import type {
  GenerateDescription,
  GenerateTitle,
  GenerateURL,
  PluginConfig
} from '@payloadcms/plugin-seo/types'

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
  serverURL: process.env.PAYLOAD_PUBLIC_EXTERNAL_SERVER_URL,
  admin: {
    user: Users.slug,
    avatar: UserAvatar,
    bundler: webpackBundler(),
    css: path.resolve(__dirname, 'css/admin.scss')
  },
  cors: process.env.WHITELIST_ORIGINS ? process.env.WHITELIST_ORIGINS.split(',') : [],
  csrf: process.env.WHITELIST_ORIGINS ? process.env.WHITELIST_ORIGINS.split(',') : [],
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
  ],
  globals: [Navigation, SocialLinks, SiteOptions],
  email: {
    fromName: process.env.EMAIL_SMTP_NAME,
    fromAddress: process.env.EMAIL_SMTP_EMAIL_ADDRESS,
    transportOptions: {
      host: process.env.EMAIL_SMTP_HOST,
      port: process.env.EMAIL_SMTP_PORT,
      secure: true,
      requireTLS: true,
      auth: {
        user: process.env.EMAIL_SMTP_ACCOUNT,
        pass: process.env.EMAIL_SMTP_PASSWORD
      }
    }
  },
  editor: slateEditor({}),
  plugins: [
    seo({
      collections: ['pages', 'posts'],
      uploadsCollection: 'images',
      fields: [
        {
          name: 'keywords',
          type: 'text',
          label: 'Keywords (separated by comma)'
        }
      ],
      generateTitle: ({ doc }: any) => `${doc.title.value} | Logoipsum.com`,
      generateDescription: ({ doc }: any) => doc.excerpt.value,
      generateImage: ({ doc }: any) => doc?.postImage?.value,
      generateURL: ({ doc, collection }: any) =>
        `https://logoipsum.com/${collection?.slug}/${doc?.fields?.slug?.value}`
    }),
    webp()
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts')
  },
  graphQL: {
    disable: true
    // schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql')
  },
  db: mongooseAdapter({
    url: process.env.MONGODB_URI
  })
})
