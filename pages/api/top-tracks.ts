import type { NextApiRequest, NextApiResponse } from "next";
import { getTopTracks } from "../../utils/spotify";
import sharp from "sharp";
import { encode } from "blurhash";
import { HttpStatusCode, SpotifyAlbum } from "../../types/types";

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
  try {
    const response = await getTopTracks();
    const { status } = await response;

    if (status === HttpStatusCode.OK) {
      const data = await response.json();
      const { items: tracks } = await data;

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
    } else {
      return res.status(204).end();
    }
  } catch (error) {
    return res.status(500).end();
  }
}
