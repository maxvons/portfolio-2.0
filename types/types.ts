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
