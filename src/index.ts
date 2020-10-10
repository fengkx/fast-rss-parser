import { detectFeed } from './detect-feed'
import { parseAtom, parseRSS2, parseRSS2GP, parseRSS2Itunes, parseRSS2ItunesAndGP } from './parse'

export async function parse(xml: string) {
  const docType = await detectFeed(xml)
  switch (docType.docType) {
    case 'rss':
      if (docType.version >= 2) {
        if (docType.isItunes && docType.isGooglePlay) {
          return parseRSS2ItunesAndGP(xml)
        }
        if (docType.isItunes) {
          return parseRSS2Itunes(xml)
        }
        if (docType.isGooglePlay) {
          return parseRSS2GP(xml)
        }
        return parseRSS2(xml)
      }
      throw new Error('Not Impl')

    case 'atom':
      return parseAtom(xml)
    default:
      throw new Error('unsupported doctype')
  }
}
