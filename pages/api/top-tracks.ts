import type { NextApiRequest, NextApiResponse } from "next";
import { getTopTracks } from "../../utils/spotify";

type Data = {
  artist: string;
  songUrl: string;
  title: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const response = await getTopTracks().then((res) => res.json());
  const { items } = await response;

  const topTenTracks = items.slice(0, 10).map((track: any) => ({
    artist: track.artists.map((_artist: any) => _artist.name).join(", "),
    songUrl: track.external_urls.spotify,
    title: track.name,
  }));

  return res.status(200).json(topTenTracks);
}