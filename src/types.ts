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

export interface RSS2Item {
	title: string;
	link: string;
	description: string;
	pubDate: string;
	guid: string;
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
	lastBuildDate?: string;
	pubDate?: string;
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
	items: RSS2Item[];
}
