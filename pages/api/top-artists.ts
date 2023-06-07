import type { NextApiRequest, NextApiResponse } from "next";
import { getTopArtists } from "../../utils/spotify";

type Data = {
  artist: string;
  songUrl: string;
  title: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const response = await getTopArtists().then((res) => res.json());
  const { items } = await response;

  const topTenArtists = items.slice(0, 10).map((artist: any) => ({
    name: artist.name,
    artistUrl: artist.external_urls.spotify,
    images: artist.images,
  }));

  return res.status(200).json(topTenArtists);
}
