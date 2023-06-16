import type { NextApiRequest, NextApiResponse } from "next";
import { getCurrentlyPlaying } from "../../utils/spotify";
import { HttpStatusCode } from "../../types/types";

type Data = {
  progress_ms: number;
  is_playing: boolean;
  item: any;
  currently_playing_type: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  try {
    const response = await getCurrentlyPlaying();
    const { status } = await response;

    if (status === HttpStatusCode.OK) {
      const data = await response.json();
      const { progress_ms, is_playing, item, currently_playing_type } =
        await data;
      return res.status(200).json({
        progress_ms,
        is_playing,
        item,
        currently_playing_type,
      });
    } else if (status === HttpStatusCode.NO_CONTENT) {
      return res.status(204).end();
    }
  } catch (error) {
    return res.status(500).end();
  }
}
