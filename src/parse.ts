import { transform } from 'camaro'
import { GooglePlayRSS2, IRSS2, ITunesGooglePlayRSS2, ITunesRSS2 } from './types'
import { googlePlayRSStpl, itunesGooglePlayRsstpl, itunesRsstpl, rss2Tpl } from './templates/rss'

export async function parseRSS2(xml: string): Promise<IRSS2> {
  const result = await transform(xml, rss2Tpl)
  return result as IRSS2
}

export async function parseRSS2Itunes(xml: string): Promise<ITunesRSS2> {
  const result = await transform(xml, itunesRsstpl)
  return result as IRSS2
}

export async function parseRSS2ItunesAndGP(xml: string): Promise<ITunesGooglePlayRSS2> {
  const result = await transform(xml, itunesGooglePlayRsstpl)
  return result as IRSS2
}

export async function parseRSS2GP(xml: string): Promise<GooglePlayRSS2> {
  const result = await transform(xml, googlePlayRSStpl)
  return result as IRSS2
}
