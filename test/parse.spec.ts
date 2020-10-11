import { parseAtom, parseRdf, parseRSS2, parseRSS2Itunes } from '../src/parse'
import { fixture, readAsString } from './utils'
import * as sampleRSS2JSON from './__fixture__/output/sample-rss-2.json'
import * as itunesCategoryJSON from './__fixture__/output/itunes-category.json'
import * as itunesKeywordsJSON from './__fixture__/output/itunes-keywords.json'
import * as itunesKeywordsArrayJSON from './__fixture__/output/itunes-keywords-array.json'
import * as sampleAtomJSON from './__fixture__/output/sample-atom.json'
import * as redditRSSJSON from './__fixture__/output/reddit-rss.json'
import * as heiseAtomJSON from './__fixture__/output/heise-atom.json'
import * as rss1JSON from './__fixture__/output/rss-1.json'

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
  test('sample-atom.atom', async () => {
    const atomStr = await readAsString(fixture('sample-atom.atom'));
    const data = await parseAtom(atomStr);
    expect(JSON.parse(JSON.stringify(data))).toStrictEqual(sampleAtomJSON)
  })
  test('reddit.rss.xml', async () => {
    const rssStr = await readAsString(fixture('reddit.rss.xml'));
    const data = await parseRSS2(rssStr)
    expect(data.channel.ttl).toBeNaN()
    const newData = JSON.parse(JSON.stringify(data))
    expect(newData).toStrictEqual(redditRSSJSON);
  })
  test('heise-atom.xml', async () => {
    const atomStr = await readAsString(fixture('heise-atom.xml'));
    const data = await parseAtom(atomStr);
    expect(JSON.parse(JSON.stringify(data))).toStrictEqual(heiseAtomJSON)
  })
  test('rss-1.xml', async () => {
    const rdfStr = await readAsString(fixture('rss-1.xml'));
    const data = await parseRdf(rdfStr);
    expect(JSON.parse(JSON.stringify(data))).toStrictEqual(rss1JSON)
  })
})
