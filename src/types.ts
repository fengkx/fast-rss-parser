export interface AtomTypeVersion {
	docType: 'atom';
}
export interface RSSTypeVersion {
	docType: 'rss';
	version: number;
	isItunes?: boolean;
	isGooglePlay?: boolean;
}
export interface RDFTypeVersion {
	docType: 'rdf';
	version: 1;
}
export type TDocTypeVersion = AtomTypeVersion | RSSTypeVersion | RDFTypeVersion

export interface FeedItem {
	title: string;
	link: string;
	description: string;
  publishedAt: string;
	id: string;
	categories?: string[];
  author?: string;
  comments?: string;
  enclosure?: TEnclosure;
  source?: string;
}

export interface TEnclosure {
  url: string;
  length: number;
  type: string;
}
// https://www.rssboard.org/rss-2-0-1
export interface IRSS2Channel {
	title: string;
	link: string;
	description: string;
	language?: string;
	updatedAt?: string;
	publishedAt?: string;
	copyright?: string;
	managingEditor?: string;
	webMaster?: string;
	category?: string;
	generator?: string;
	docs?: string;
	cloud?: TChannelCloud;
	ttl?: number;
	image?: TChannelImage;
	rating?: any;
	textInput?: any;
	skipHours?: any;
	skipDays?: any;
}

export interface TChannelCloud {
	domain: string;
	port: number;
	path: string;
	registerProcedure: string;
	protocol: string;
}
export interface TChannelImage {
	url: string;
	title: string;
	link: string;
	height?: number;
	width?: number;
	description?: string;
}

export interface IRSS2 {
	version: string;
	channel: IRSS2Channel;
	items: FeedItem[];
}

export interface ITunesChannel extends IRSS2Channel {
  ['itunes:subtitle']?: string;
  ['itunes:summary']?: string;
  ['itunes:author']?: string;
  ['itunes:explicit']?: string;
  ['itunes:block']?: string;
  ['itunes:owner']?: {
    'itunes:email': string;
    'itunes:name': string;
  };
}

export interface ITunesFeedItem extends FeedItem {
  ['itunes:subtitle']?: string;
  ['itunes:summary']?: string;
  ['itunes:author']?: string;
  ['itunes:explicit']?: string;
  ['itunes:block']?: string;
  ['itunes:duration']?: string;
  ['itunes:keywords']?: string; // alawys use string-join by comma ",
}

export interface ITunesRSS2 extends IRSS2 {
  channel: ITunesChannel;
  items: ITunesFeedItem[];
}

export interface GooglePlayChannel extends IRSS2Channel {
  ['googleplay:owner']?: string;
  ['googleplay:author']?: string;
}

export interface GooglePlayRSS2 extends IRSS2 {
  channel: GooglePlayChannel;
}

export interface ITunesGoogleplayChannel extends ITunesChannel, GooglePlayChannel {}
export interface ITunesGooglePlayFeedItem extends ITunesFeedItem {}
export interface ITunesGooglePlayRSS2 extends IRSS2 {
  channel: ITunesGoogleplayChannel;
  items: ITunesGooglePlayFeedItem[];
}

export interface AtomChannel {
  id: string;
  title: string;
  updatedAt: string;
  author?: {
    name: string;
    email?: string;
    uri?: string;
  };
  categories?: {
    term: string;
    scheme?: string;
    label?: string;
  }[];
  contributor?: string;
  generator?: string;
  icon?: string;
  logo?: string;
  rights?: string;
  subtitle?: string;
}

export interface AtomFeedItem {
  id: string;
  title: string;
  updatedAt: string;
  author?: {name: string};
  content?: string;
  link?: string;
  summary?: string;
  categories?: string[];
  contributors?: string[];
  publishedAt?: string;
  // ...
}

// https://validator.w3.org/feed/docs/atom.html
export interface IAtomFeed {
  version: string;
  channel: AtomChannel;
  items: AtomFeedItem[];
}

export interface RdfFeedItem {
  title: 'title';
  link: 'link';
  description: 'description';
  publishedAt: 'dc:date';
  id: 'dc:identifier|link';
  author: 'dc:creator';
}

export interface RdfChannel {
  title: string;
  link: string;
  description: string;
}

export interface IRdfFeed {
  version: '1'|1;
  channel: RdfChannel;
  items: RdfFeedItem[];
}
