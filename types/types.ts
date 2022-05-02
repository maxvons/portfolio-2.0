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
  width: number;
  height: number;
}

export interface TimelinePoint {
  date: string;
  location: string;
  title: string;
  description?: string;
  image?: TimelinePointImage;
}
