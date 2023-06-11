import { StaticImageData } from "next/image";

export enum LinkSize {
  SMALL,
  LARGE,
}

export enum ImageSize {
  SMALL,
  MEDIUM,
  LARGE,
  LARGEHORIZONTAL,
  AVATAR,
}

export enum Project {
  WILFO,
  PORTFOLIONEW,
  REVMATOLOGEN,
  HAUGESUND,
  CLEANLIST,
  PORTFOLIO,
}

export enum Social {
  GITHUB,
  LINKEDIN,
  INSTAGRAM,
  TWITTER,
}

export interface ProjectData {
  title: string;
  description: string;
  tags: string[];
  gitHref: string;
  href: string;
}

interface TimelinePointImage {
  src: string | StaticImageData;
  alt: string;
}

export interface SpotifyImage {
  url: string;
  height: number;
  width: number;
}

export interface SpotifyAlbum {
  name: string;
  images: SpotifyImage[];
}

export interface TimelinePoint {
  date: string;
  location: string;
  title: string;
  description?: string;
  image?: TimelinePointImage;
}

export interface Song {
  spotifyId: string;
  name: string;
  url: string;
  artists: Artist[];
  duration_ms?: number;
  progress_ms?: number;
  is_playing?: boolean;
  album?: SpotifyAlbum;
  blurhash?: string;
}

export interface Artist {
  spotifyId: string;
  name: string;
  url: string;
  images?: SpotifyImage[];
  blurhash?: string;
}

export interface Episode {
  name: string;
  url: string;
  showName: string;
  duration_ms: number;
  progress_ms: number;
  is_playing: boolean;
}
