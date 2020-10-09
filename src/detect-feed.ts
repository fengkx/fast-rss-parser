import { transform } from 'camaro'
import { TDocTypeVersion } from './types'

export async function detectFeed(xml: string): Promise<TDocTypeVersion> {
  const docType = await transform(xml, {
    rss: 'rss/channel/title',
    atom: 'feed/title',
    rssVersion: '/rss/@version'
  })

  if (docType.rss) {
    const version = parseFloat(docType.rssVersion)
    if (version < 2) {
      return { docType: 'rss', version }
    }
    return {
      docType: 'rss',
      version,
      isGooglePlay: /xmlns:googleplay/.test(xml),
      isItunes: /xmlns:itunes/.test(xml)
    }
  }
  return { docType: 'atom' }
}
