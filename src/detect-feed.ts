import { transform } from 'camaro'
import { TDocTypeVersion } from './types'

export async function detectFeed(xml: string): Promise<TDocTypeVersion> {
  const docType = await transform(xml, {
    rss: 'rss/channel/title',
    atom: 'feed/title',
    rdf: 'rdf:RDF',
    rssVersion: '/rss/@version'
  })

  if (docType.rss) {
    const version = parseFloat(docType.rssVersion)
    return {
      docType: 'rss',
      version,
      isGooglePlay: /xmlns:googleplay/.test(xml),
      isItunes: /xmlns:itunes/.test(xml)
    }
  }
  // rdf is rss version 1
  if (docType.rdf) {
    return {
      docType: 'rdf',
      version: 1
    }
  }
  return { docType: 'atom' }
}
