import type { NextApiRequest, NextApiResponse } from "next";
import { getTopArtists } from "../../utils/spotify";
import sharp from "sharp";
import { encode } from "blurhash";
import { HttpStatusCode, SpotifyImage } from "../../types/types";

type Data = {
  name: string;
  url: string;
  images: SpotifyImage[];
  blurhash: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>,
) {
  try {
    const response = await getTopArtists();
    const { status } = await response;

    if (status === HttpStatusCode.OK) {
      const data = await response.json();
      const { items: artists } = await data;

      const topTenArtistsWithBlurHash = await Promise.all(
        artists.map(async (artist: any) => {
          const imageResponse = await fetch(artist.images[0].url);
          const arrayBuffer = await imageResponse.arrayBuffer();

          const pixels = await sharp(arrayBuffer)
            .resize(32, 32)
            .raw()
            .ensureAlpha()
            .toBuffer();
          const clamped = new Uint8ClampedArray(pixels);
          const blurhash = encode(clamped, 32, 32, 4, 4);

          return {
            id: artist.id,
            name: artist.name,
            url: artist.external_urls.spotify,
            images: artist.images,
            blurhash: blurhash,
          };
        }),
      );

      return res.status(200).json(topTenArtistsWithBlurHash);
    } else {
      return res.status(204).end();
    }
  } catch (error) {
    return res.status(500).end();
  }
}
