export interface AtomTypeVersion {
	docType: 'atom';
}
export interface RSSTypeVersion {
	docType: 'rss';
	version: number;
	isItunes?: boolean;
	isGooglePlay?: boolean;
}
export interface RSS2TypeVersion {
	docType: 'rss';
	version: 2;
	isItunes: boolean;
	isGooglePlay: boolean;
}
export type TDocTypeVersion = AtomTypeVersion | RSSTypeVersion | RSS2TypeVersion

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
