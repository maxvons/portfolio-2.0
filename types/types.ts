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

interface SpotifyImage {
  url: string;
  height: number;
  width: number;
}

export interface TimelinePoint {
  date: string;
  location: string;
  title: string;
  description?: string;
  image?: TimelinePointImage;
}

export interface Song {
  name: string;
  url: string;
  artists: string[];
  duration_ms?: number;
  progress_ms?: number;
  is_playing?: boolean;
}

export interface Artist {
  name: string;
  url: string;
  images?: SpotifyImage[];
}

export interface Episode {
  name: string;
  url: string;
  showName: string;
  duration_ms: number;
  progress_ms: number;
  is_playing: boolean;
}
