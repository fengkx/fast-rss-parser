import { parseRSS2, parseRSS2Itunes } from '../src/parse'
import { fixture, readAsString } from './utils'
import * as sampleRSS2JSON from './__fixture__/output/sample-rss-2.json'
import * as itunesCategoryJSON from './__fixture__/output/itunes-category.json'
import * as itunesKeywordsJSON from './__fixture__/output/itunes-keywords.json'
import * as itunesKeywordsArrayJSON from './__fixture__/output/itunes-keywords-array.json'


describe('parse feed',  () => {
  test('simple rss2', async () => {
    const rssStr = await readAsString(fixture('sample-rss-2.xml'))
    const data = await parseRSS2(rssStr)
    // convert to JSON remove NaN
    expect(data.channel.ttl).toBeNaN()
    const newData = JSON.parse(JSON.stringify(data))
    expect(newData).toStrictEqual(sampleRSS2JSON)
  })
  test('itunes-category.rss', async () => {
    const rssStr = await readAsString(fixture('itunes-category.rss'));
    const data = await parseRSS2Itunes(rssStr)
    expect(data.channel.ttl).toBeNaN()
    const newData = JSON.parse(JSON.stringify(data))
    expect(newData).toStrictEqual(itunesCategoryJSON)
  })
  test('itunes-keywords.rss', async () => {
    const rssStr = await readAsString(fixture('itunes-keywords.rss'));
    const data = await parseRSS2Itunes(rssStr)
    expect(data.channel.ttl).toBeNaN()
    const newData = JSON.parse(JSON.stringify(data))
    expect(newData).toStrictEqual(itunesKeywordsJSON)
  })
  test('itunes-keywords-array.rss', async () => {
    const rssStr = await readAsString(fixture('itunes-keywords-array.rss'));
    const data = await parseRSS2Itunes(rssStr)
    expect(data.channel.ttl).toBeNaN()
    const newData = JSON.parse(JSON.stringify(data))
    expect(newData).toStrictEqual(itunesKeywordsArrayJSON)
  })
})
