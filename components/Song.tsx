import { Song } from "../types/types";
import styles from "../styles/Song.module.scss";

interface SongProps {
  song?: Song;
  loading?: boolean;
}

const Song = ({ song, loading }: SongProps) => {
  if (loading) {
    return (
      <div className={styles.container}>
        <p>Loading...</p>
      </div>
    );
  }

  if (song) {
    return (
      <div className={styles.container}>
        <p>{song.name}</p>
        <p>{song.url}</p>
        <div>
          {song.artists.map((artist, index) => (
            <p key={index}>{artist.name}</p>
          ))}
        </div>
        <p>{song.album && song.album.name}</p>
      </div>
    );
  }

  return null;
};

export default Song;
