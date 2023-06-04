import type { NextApiRequest, NextApiResponse } from "next";
import { getCurrentlyPlaying } from "../../utils/spotify";

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
  const response = await getCurrentlyPlaying().then((res) => res.json());
  const { progress_ms, is_playing, item, currently_playing_type } =
    await response;

  if (!is_playing) {
    return res.status(200);
  }

  return res.status(200).json({
    progress_ms,
    is_playing,
    item,
    currently_playing_type,
  });
}
