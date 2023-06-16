import useSWR from "swr";
import fetcher from "../utils/fetcher";
import { deserializeNowPlaying, renderArtists } from "../utils/functions";
import Spotify from "./svgs/Spotify";
import styles from "../styles/NowPlaying.module.scss";
import { Song } from "../types/types";
import ProgressBar from "./ProgressBar";
import MusicBars from "./MusicBars";
import PauseIcon from "./svgs/PauseIcon";

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

  if (error || !data) {
    renderNotPlaying();
  }

  // Render data from Spotify API.
  const nowPlaying = deserializeNowPlaying(data);
  if ("artists" in nowPlaying) {
    return renderSong(nowPlaying);
  } else {
    return renderNotPlaying();
  }
};

function renderSong(song: Song) {
  return (
    <div className={styles.container}>
      {renderTitle(song.is_playing)}
      <div className={styles.data}>
        <Spotify className={styles.icon} />
        <div className={styles.songData}>
          <p className={styles.songName}>{song.name}</p>
          <p className={styles.artists}>{renderArtists(song)}</p>
        </div>
      </div>
      <ProgressBar
        progress_ms={song.progress_ms ? song.progress_ms : 0}
        total_ms={song.duration_ms ? song.duration_ms : 0}
        playing={song.is_playing}
      />
    </div>
  );
}

function renderTitle(playing?: boolean) {
  if (playing) {
    return (
      <div className={styles.titleContainer}>
        <MusicBars />
        <p className={styles.title}>Now Playing</p>
      </div>
    );
  }

  return (
    <div className={`${styles.titleContainer} ${styles.paused}`}>
      <PauseIcon className={styles.pauseIcon} />
      <p className={styles.title}>Paused</p>
    </div>
  );
}

function renderNotPlaying() {
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
      <ProgressBar progress_ms={0} total_ms={0} noFill />
    </div>
  );
}

export default NowPlaying;
