import useSWR from "swr";
import fetcher from "../utils/fetcher";
import { deserializeNowPlaying } from "../utils/functions";
import Spotify from "./svgs/Spotify";
import styles from "../styles/NowPlaying.module.scss";
import { Episode, Song } from "../types/types";
import ProgressBar from "./ProgressBar";

const NowPlaying = () => {
  const { data, error, isLoading } = useSWR("/api/currently-playing", fetcher);

  if (isLoading) {
    return (
      <div className={styles.container}>
        <p className={styles.title}>Loading...</p>
        <div className={styles.data}>
          <Spotify className={styles.icon} />
          <div className={styles.songData}>
            <div className={styles.songNameSkeleton}></div>
            <div className={styles.artistsSkeleton}></div>
          </div>
        </div>
        <ProgressBar progress_ms={0} total_ms={0} loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.container}>
        <p className={styles.title}>Not playing</p>
        <div className={styles.data}>
          <Spotify className={styles.icon} />
          <div className={styles.songData}>
            <p className={styles.songName}>-</p>
            <p className={styles.artists}>-</p>
          </div>
        </div>
        <ProgressBar progress_ms={0} total_ms={0} />
      </div>
    );
  }

  // Render data from Spotify API.
  const nowPlaying = deserializeNowPlaying(data);
  return (
    <div className={styles.container}>
      <p className={styles.title}>Now Playing</p>
      <div className={styles.data}>
        <Spotify className={styles.icon} />
        <div className={styles.songData}>
          <p className={styles.songName}>{nowPlaying.name}</p>
          <p className={styles.artists}>{renderArtists(nowPlaying)}</p>
        </div>
      </div>
      <ProgressBar
        progress_ms={nowPlaying.progress_ms}
        total_ms={nowPlaying.duration_ms}
      />
    </div>
  );
};

function renderArtists(nowPlaying: Song | Episode): React.ReactNode {
  if ("artists" in nowPlaying) {
    return nowPlaying.artists.join(" · ");
  } else {
    return nowPlaying.showName;
  }
}

export default NowPlaying;
