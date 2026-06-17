import { config, fields, collection, singleton } from '@keystatic/core';
export default config({
  storage: {
    kind: 'cloud',
  },
  cloud: {
    project: 'launch-iop/launch-website',
  },
  collections: {
    team: collection({
      label: 'Team Members',
      slugField: 'name',
      path: 'launch-iop/src/content/team/*',
      format: { data: 'yaml' },
      schema: {
        name: fields.slug({ name: { label: 'Full Name' } }),
        title: fields.text({ label: 'Title / Role' }),
        order: fields.integer({
          label: 'Display Order (lower numbers appear first)',
          defaultValue: 0,
        }),
        bio: fields.text({ label: 'Bio', multiline: true }),
        photo: fields.image({
          label: 'Photo',
          directory: 'launch-iop/public/images/team',
          publicPath: '/images/team/',
        }),
        linkedin: fields.url({ label: 'LinkedIn URL' }),
      },
    }),
    posts: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'launch-iop/src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        publishDate: fields.date({ label: 'Publish Date' }),
        summary: fields.text({ label: 'Summary', multiline: true }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),
  },
  singletons: {
    homepage: singleton({
      label: 'Homepage Text',
      path: 'launch-iop/src/content/homepage',
      format: { data: 'yaml' },
      schema: {
        heroHeadline: fields.text({ label: 'Hero Headline' }),
        heroSubheadline: fields.text({ label: 'Hero Subheadline', multiline: true }),
        introText: fields.text({ label: 'Intro Paragraph', multiline: true }),
      },
    }),
  },
});
