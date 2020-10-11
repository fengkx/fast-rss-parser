export const rdfTpl = {
  version: '#1',
  channel: {
    title: 'rdf:RDF/channel/title',
    link: 'rdf:RDF/channel/link|rss/channel/atom:link',
    description: 'rdf:RDF/channel/description',
  },
  items: [
    '//item',
    {
      title: 'title',
      link: 'link',
      description: 'description',
      publishedAt: 'dc:date',
      id: 'dc:identifier|link',
      author: 'dc:creator',
    }
  ]
}
