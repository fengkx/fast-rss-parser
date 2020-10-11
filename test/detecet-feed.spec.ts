import globby = require('globby')
import { detectFeed } from '../src/detect-feed'
import { fixture, readAsString } from './utils'
import { RDFTypeVersion, RSSTypeVersion } from '../src/types'

describe('detect feed version and so on', () => {
  test('atom feed', async () => {
    const atomStr = await readAsString(fixture('sample-atom.atom'))
    const result = await detectFeed(atomStr)
    expect(result).toStrictEqual({ docType: 'atom' })
  })

  test('rss feed', async () => {
    const rssStr = await readAsString(fixture('sample-rss-2.xml'))
    const result = await detectFeed(rssStr)
    const expected: RSSTypeVersion = {
      docType: 'rss',
      version: 2.0,
      isGooglePlay: false,
      isItunes: false,
    }
    expect(result).toStrictEqual(expected)
  })

  test('itunes rss feed', async () => {
    const pattern = `${fixture('itunes')}*.rss`
    const files = await globby(pattern)
    for (const fpath of files) {
      const rssStr = await readAsString(fpath)
      const result = await detectFeed(rssStr)

      expect(result).toHaveProperty('isItunes', true)
      expect(result).toHaveProperty('docType', 'rss')
      expect(result).toHaveProperty('version')
      expect((result as RDFTypeVersion).version).toBeGreaterThanOrEqual(2)
    }
  })
})
