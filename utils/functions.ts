// Util functions here.

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
    name: data.item ? data.item.name : "",
    url: data.item ? data.item.external_urls.spotify : "",
    artists: data.item.artists.map((artist: any) => artist.name),
    duration_ms: data.item.duration_ms,
    progress_ms: data.progress_ms,
    is_playing: data.is_playing,
  };
}

function deserializeTopTenArtists(data: any): Artist[] {
  if (data.items) {
    return data.items.map((item: any) => ({
      name: item.name,
      url: item.artistUrl,
      images: item.images,
    }));
  }

  return [];
}

function deserializeTopTenSongs(data: any): Song[] {
  return data.map((song: any) => ({
    name: song.title,
    url: song.songUrl,
    artists: song.artist,
  }));
}

export {
  deserializeNowPlaying,
  deserializeTopTenSongs,
  deserializeTopTenArtists,
};
