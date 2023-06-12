import { NextPage } from "next";
import useSWR from "swr";
import fetcher from "../utils/fetcher";
import styles from "../styles/TopTenSpotify.module.scss";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import { useState } from "react";
import {
  deserializeTopTenArtists,
  deserializeTopTenSongs,
} from "../utils/functions";
import Title from "../components/Title";
import Song from "../components/Song";
import Footer from "../components/Footer";
import Artist from "../components/Artist";

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

  if (songError || artistError) {
    return <div>Error...</div>;
  }

  // Render songs and artists from Spotify API.
  return (
    <>
      <Navbar open={open} onClick={() => setOpen(!open)} />
      <Layout noPadding>
        <div className={styles.wrapper}>
          <Title title="My music" tag="What I listen to the most" />
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
                {deserializeTopTenSongs(songs).map((song) => (
                  <Song key={song.spotifyId} song={song} />
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
            {artistIsLoading ? (
              <>
                {[...Array(10)].map((index) => (
                  <Artist key={index} loading />
                ))}
              </>
            ) : (
              <>
                {deserializeTopTenArtists(artists).map((artist) => (
                  <Artist key={artist.spotifyId} artist={artist} />
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
