export const atomTpl = {
  version: '/feed/@xmlns',
  channel: {
    title: 'feed/title',
    updatedAt: 'feed/updated',
    link: 'feed/link/@href',
    author: {
      name: 'feed/author/name',
      email: 'feed/author/email',
      uri: 'feed/author/uri',
    },
    categories: ['feed//category', {
      term: '@term',
      scheme: '@scheme',
      label: '@label'

    }],
    contributor: '/feed/contributor',
    generator: '/feed/generator',
    icon:'/feed/icon',
    logo:'/feed/logo',
    rights:'/feed/rights',
    subtitle: '/feed/subtitle',
  },
  items: ['//entry', {
    id: 'id',
    title: 'title',
    description: 'summary',
    publishedAt: 'published',
    content: 'content',
    link: 'link',
    categories: ['category', '.'],
    contributors: ['contributor', '.'],
  }]
}
