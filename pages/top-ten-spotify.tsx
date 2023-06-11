import { NextPage } from "next";
import useSWR from "swr";
import fetcher from "../utils/fetcher";
import styles from "../styles/TopTenSpotify.module.scss";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { deserializeTopTenSongs } from "../utils/functions";
import Title from "../components/Title";
import Song from "../components/Song";
import Footer from "../components/Footer";

const TopTenSpotify: NextPage = () => {
  const [open, setOpen] = useState(false);
  const {
    data: songs,
    error: songError,
    isLoading: songIsLoading,
  } = useSWR("/api/top-tracks", fetcher);
  const {
    data: artists,
    error: artistError,
    isLoading: artistIsLoading,
  } = useSWR("/api/top-artists", fetcher);

  if (songError) {
    return <div>Error...</div>;
  }

  // Render songs and artists from Spotify API.
  return (
    <>
      <Navbar open={open} onClick={() => setOpen(!open)} />
      <Layout noPadding>
        <div className={styles.wrapper}>
          <Title
            title="My music"
            subTitle="My top songs and artists on Spotify."
            tag="What I listen to the most"
          />
          <h2 className={styles.header}>
            My favorite songs on Spotify right now.
          </h2>
          <div className={styles.topTenContainer}>
            {songIsLoading ? (
              <>
                {[...Array(10)].map((index) => (
                  <Song key={index} loading />
                ))}
              </>
            ) : (
              <>
                {deserializeTopTenSongs(songs).map((song, index) => (
                  <Song key={index} song={song} />
                ))}
              </>
            )}
          </div>
        </div>
      </Layout>
      <Layout>
        <span className={styles.divider} />
        <div className={`${styles.wrapper} ${styles.noMargin}`}>
          <h2 className={styles.header}>
            My favorite artists on Spotify right now.
          </h2>
          <div className={styles.topTenContainer}>
            {songIsLoading ? (
              <>
                {[...Array(10)].map((index) => (
                  <Song key={index} loading />
                ))}
              </>
            ) : (
              <>
                {deserializeTopTenSongs(songs).map((song, index) => (
                  <Song key={index} song={song} />
                ))}
              </>
            )}
          </div>
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default TopTenSpotify;
