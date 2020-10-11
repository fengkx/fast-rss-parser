import { transform } from 'camaro'
import { GooglePlayRSS2, IAtomFeed, IRdfFeed, IRSS2, ITunesGooglePlayRSS2, ITunesRSS2 } from './types'
import { googlePlayRSStpl, itunesGooglePlayRsstpl, itunesRsstpl, rss2Tpl } from './templates/rss'
import { atomTpl } from './templates/atom'
import { rdfTpl } from './templates/rdf'

export async function parseRSS2(xml: string): Promise<IRSS2> {
  const result = await transform(xml, rss2Tpl)
  return result as IRSS2
}

export async function parseRSS2Itunes(xml: string): Promise<ITunesRSS2> {
  const result = await transform(xml, itunesRsstpl)
  return result as ITunesRSS2
}

export async function parseRSS2ItunesAndGP(xml: string): Promise<ITunesGooglePlayRSS2> {
  const result = await transform(xml, itunesGooglePlayRsstpl)
  return result as ITunesGooglePlayRSS2
}

export async function parseRSS2GP(xml: string): Promise<GooglePlayRSS2> {
  const result = await transform(xml, googlePlayRSStpl)
  return result as GooglePlayRSS2
}

export async function parseAtom(xml: string): Promise<IAtomFeed> {
  const result = await transform(xml, atomTpl)
  return result as IAtomFeed
}
export async function parseRdf(xml: string): Promise<IRdfFeed> {
  const result = await transform(xml, rdfTpl)
  return result as IRdfFeed
}
