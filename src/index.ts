import { detectFeed } from './detect-feed'
import { parseAtom, parseRdf, parseRSS2, parseRSS2GP, parseRSS2Itunes, parseRSS2ItunesAndGP } from './parse'

export async function parse(xml: string) {
  const docType = await detectFeed(xml)
  switch (docType.docType) {
    case 'rss':
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

    case 'atom':
      return parseAtom(xml)
    case 'rdf':
      return parseRdf(xml)
    default:
      throw new Error('unsupported doctype')
  }
}
