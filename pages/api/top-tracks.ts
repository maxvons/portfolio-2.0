import type { NextApiRequest, NextApiResponse } from "next";
import { getTopTracks } from "../../utils/spotify";
import sharp from "sharp";
import { encode } from "blurhash";
import { SpotifyAlbum } from "../../types/types";

type Data = {
  id: string;
  artists: string[];
  songUrl: string;
  title: string;
  album: SpotifyAlbum;
  blurhash: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>,
) {
  const response = await getTopTracks().then((res) => res.json());
  const { items: tracks } = await response;

  const topTenTracksWithBlurHash = await Promise.all(
    tracks.map(async (track: any) => {
      const imageResponse = await fetch(track.album.images[0].url);
      const arrayBuffer = await imageResponse.arrayBuffer();

      const pixels = await sharp(arrayBuffer)
        .resize(32, 32)
        .raw()
        .ensureAlpha()
        .toBuffer();
      const clamped = new Uint8ClampedArray(pixels);
      const blurhash = encode(clamped, 32, 32, 4, 4);

      return {
        id: track.id,
        artists: track.artists,
        songUrl: track.external_urls.spotify,
        title: track.name,
        album: track.album,
        blurhash: blurhash,
      };
    }),
  );

  return res.status(200).json(topTenTracksWithBlurHash);
}
