import { decode } from "blurhash";

import { Artist, Episode, Song } from "../types/types";

function deserializeNowPlaying(data: any): Song | Episode {
  if (data.currently_playing_type === "episode") {
    return {
      name: data.item ? data.item.name : "",
      url: data.item ? data.item.external_urls.spotify : "",
      showName: data.item ? data.item.show.name : "",
      duration_ms: data.item ? data.item.duration_ms : 0,
      progress_ms: data.progress_ms,
      is_playing: data.is_playing,
    };
  }

  return {
    spotifyId: data.item ? data.item.id : "",
    name: data.item ? data.item.name : "",
    url: data.item ? data.item.external_urls.spotify : "",
    artists: data.item.artists,
    duration_ms: data.item.duration_ms,
    progress_ms: data.progress_ms,
    is_playing: data.is_playing,
  };
}

function deserializeTopTenArtists(data: any): Artist[] {
  return data.map((item: any) => ({
    spotifyId: item.id,
    name: item.name,
    url: item.url,
    images: item.images,
    blurhash: item.blurhash,
  }));
}

function deserializeTopTenSongs(data: any): Song[] {
  return data.map((song: any) => ({
    spotifyId: song.id,
    name: song.title,
    url: song.songUrl,
    artists: song.artists,
    album: song.album,
    blurhash: song.blurhash,
  }));
}

function createBlurUrl(
  blurhash: string,
  width: number,
  height: number,
): string {
  const pixels = decode(blurhash, width, height);
  const clamped = new Uint8ClampedArray(pixels);
  const imageData = new ImageData(clamped, width, height);
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");

  if (ctx) {
    ctx.putImageData(imageData, 0, 0);
    return canvas.toDataURL();
  }

  return "";
}

function renderArtists(item: Song | Episode): React.ReactNode {
  if ("artists" in item) {
    const artists = item.artists.map((artist) => artist.name);
    return artists.join(" · ");
  } else {
    return item.showName;
  }
}

export {
  deserializeNowPlaying,
  deserializeTopTenSongs,
  deserializeTopTenArtists,
  createBlurUrl,
  renderArtists,
};
