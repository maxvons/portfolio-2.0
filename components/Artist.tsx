import styles from "../styles/Artist.module.scss";
import Image from "next/image";
import { createBlurUrl } from "../utils/functions";
import { Artist } from "../types/types";
import SpotifyPlaceholderImg from "/public/images/spotify-placeholder-image.jpg";

interface ArtistProps {
  artist?: Artist;
  loading?: boolean;
}

const Artist = ({ artist, loading }: ArtistProps) => {
  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.imageSkeleton} />
        <div className={styles.nameSkeleton} />
      </div>
    );
  }

  if (artist) {
    return (
      <div className={styles.container}>
        <a
          className={styles.imageContainer}
          href={artist.url}
          target="_blank"
          rel="noreferrer"
        >
          {artist.images ? (
            <Image
              src={artist.images[0].url}
              alt={`Image of ${artist.name}`}
              layout="fill"
              objectPosition="center"
              objectFit="cover"
              placeholder="blur"
              blurDataURL={
                artist.blurhash
                  ? createBlurUrl(artist.blurhash, 32, 32)
                  : undefined
              }
            />
          ) : (
            <Image
              src={SpotifyPlaceholderImg}
              alt="Spotify artist portrait"
              layout="fill"
              objectPosition="center"
              objectFit="cover"
              placeholder="blur"
            />
          )}
        </a>
        <p className={styles.name}>{artist.name}</p>
      </div>
    );
  }

  return null;
};

export default Artist;
