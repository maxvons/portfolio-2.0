import styles from "../styles/ProgressBar.module.scss";
import { useState, useEffect } from "react";

interface ProgressBarProps {
  progress_ms: number;
  total_ms: number;
  loading?: boolean;
}

const ProgressBar = ({ progress_ms, total_ms, loading }: ProgressBarProps) => {
  const [progress, setProgress] = useState(progress_ms);
  const progressPercentage = (progress / total_ms) * 100;

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 1000;
        return newProgress <= total_ms ? newProgress : total_ms;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [total_ms]);

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={`${styles.progressBar} ${styles.loading}`}></div>
        <div className={styles.timeContainer}>
          <p className={`${styles.time} ${styles.currentTime}`}>
            {formatTime(progress)}
          </p>
          <p className={`${styles.time} ${styles.totalTime}`}>
            &nbsp;/ {formatTime(total_ms)}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.progressBar}>
        <div
          className={styles.progressBarFill}
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
      <div className={styles.timeContainer}>
        <p className={`${styles.time} ${styles.currentTime}`}>
          {formatTime(progress)}
        </p>
        <p className={`${styles.time} ${styles.totalTime}`}>
          &nbsp;/ {formatTime(total_ms)}
        </p>
      </div>
    </div>
  );
};

function formatTime(ms: number): string {
  const seconds = Math.floor((ms / 1000) % 60);
  const minutes = Math.floor((ms / (1000 * 60)) % 60);

  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${formattedMinutes}:${formattedSeconds}`;
}

export default ProgressBar;
