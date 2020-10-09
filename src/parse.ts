import { transform } from 'camaro'
import { IRSS2 } from './types'
import { itunesRsstpl, rss2Tpl } from './templates/rss'

export async function parseRSS2(xml: string): Promise<IRSS2> {
  const result = await transform(xml, rss2Tpl)
  return result as IRSS2
}

export async function parseRSS2Itunes(xml: string): Promise<IRSS2> {
  const result = await transform(xml, itunesRsstpl)
  return result as IRSS2
}
