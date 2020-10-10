import { produce } from 'immer'

export const rss2Tpl = {
  version: '/rss/@version',
  channel: {
    title: 'rss/channel/title',
    link: 'rss/channel/link|rss/channel/atom:link',
    description: 'rss/channel/description',
    language: 'rss/channel/language',
    updatedAt: 'rss/channel/lastBuildDate',
    publishedAt: 'rss/channel/pubDate',
    copyright: 'rss/channel/copyright',
    managingEditor: 'rss/channel/managingEditor',
    webMaster: 'rss/channel/webMaster',
    category: 'rss/channel/category',
    generator: 'rss/channel/generator',
    docs: 'rss/channel/docs',
    cloud: {
      domain: 'rss/channel/cloud/@domain',
      port: 'number(@rss/channel/cloud/port)',
      path: 'rss/channel/cloud/@path',
      registerProcedure: 'rss/channel/cloud/@registerProcedure',
      protocol: 'rss/channel/cloud/@protocol'
    },
    ttl: 'number(rss/channel/ttl)',
    image: {
      url: 'rss/channel/image/url',
      title: 'rss/channel/image/title',
      link: 'rss/channel/image/link',
      height: 'number(rss/channel/image/height)',
      width: 'number(rss/channel/image/width)',
      description: 'rss/channel/image/description'
    }
    // rating: string
    // textInput: string
    // skipHours: string
    // skipDays: string
  },
  items: [
    '//item',
    {
      title: 'title',
      link: 'link',
      description: 'description',
      publishedAt: 'pubDate',
      id: 'guid',
      categories: ['category', '.'],
      author: 'author',
      comments: 'comment',
      enclosure: {
        url: 'enclosure/@url',
        length: 'enclosure/@length',
        type: 'enclosure/@type'
      }
      // source: 'source'
    }
  ]
}

const makeItunesTpl = draft => {
  const itemTpl = draft.items[1]
  const channelTpl = draft.channel
  const commonFields = ['itunes:subtitle', 'itunes:summary', 'itunes:author', 'itunes:explicit', 'itunes:block']
  commonFields.forEach(field => {
    itemTpl[field] = field
    channelTpl[field] = `rss/channel/${field}`
  })
  channelTpl['itunes:owner'] = {
    'itunes:email': 'rss/channel/itunes:owner/itunes:email',
    'itunes:name': 'rss/channel/itunes:owner/itunes:name'
  }

  itemTpl['itunes:duration'] = 'itunes:duration'
  itemTpl['itunes:keywords'] = 'string-join(//itunes:keywords/@text|itunes:keywords, ", ")'
}
const makeGoolePlayTpl = draft => {
  const channelTpl = draft.channel

  const channelField = ['googleplay:owner', 'googleplay:author']
  channelField.forEach(field => {
    channelTpl[field] = `rss/channel/${field}`
  })
}
export const itunesRsstpl = produce(rss2Tpl, makeItunesTpl)
export const googlePlayRSStpl = produce(rss2Tpl, makeGoolePlayTpl)
export const itunesGooglePlayRsstpl = produce(itunesRsstpl, makeGoolePlayTpl);
