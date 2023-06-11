import { Song } from "../types/types";
import styles from "../styles/Song.module.scss";
import Image from "next/image";
import SpotifyPlaceholderImg from "/public/images/spotify-placeholder-image.jpg";
import { createBlurUrl, renderArtists } from "../utils/functions";

interface SongProps {
  song?: Song;
  loading?: boolean;
}

const Song = ({ song, loading }: SongProps) => {
  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.imageSkeleton} />
        <div className={styles.nameSkeleton} />
        <div className={styles.artistsSkeleton} />
      </div>
    );
  }

  if (song) {
    return (
      <div className={styles.container}>
        <a
          className={styles.imageContainer}
          href={song.url}
          target="_blank"
          rel="noreferrer"
        >
          {song.album ? (
            <Image
              src={song.album.images[0].url}
              alt={`Album cover for ${song.album.name}`}
              layout="fill"
              objectPosition="center"
              objectFit="cover"
              placeholder="blur"
              blurDataURL={
                song.blurhash ? createBlurUrl(song.blurhash, 32, 32) : undefined
              }
            />
          ) : (
            <Image
              src={SpotifyPlaceholderImg}
              alt="Spotify album cover"
              layout="fill"
              objectPosition="center"
              objectFit="cover"
              placeholder="blur"
            />
          )}
        </a>
        <p className={styles.name}>{song.name}</p>
        <p className={styles.artists}>{renderArtists(song)}</p>
      </div>
    );
  }

  return null;
};

export default Song;
