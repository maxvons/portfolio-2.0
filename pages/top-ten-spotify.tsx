import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { useRouter } from "next/router";
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
import CustomHead from "../components/CustomHead";
import LinkWithIcon from "../components/LinkWithIcon";

const TopTenSpotify: NextPage = ({
  baseUrl,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
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

  if (songError && artistError) {
    return (
      <>
        <CustomHead
          title="My music"
          description="Maximilian's top ten songs and artists"
          url={`${baseUrl}${router.asPath}`}
          image="/images/music.jpg"
        />
        <Navbar open={open} onClick={() => setOpen(!open)} />
        <Layout noPadding>
          <div className={styles.wrapper}>
            <Title title="My music" tag="What I listen to the most" />
            <p className={styles.text}>
              Something went wrong either on my side or on Spotify&apos;s side
              😢
            </p>
            <LinkWithIcon text="Go back home" href="/" />
          </div>
        </Layout>
      </>
    );
  }

  // Render songs from Spotify API.
  if (!songError && artistError) {
    return (
      <>
        <CustomHead
          title="My music"
          description="Maximilian's top ten songs on Spotify"
          url={`${baseUrl}${router.asPath}`}
          image="/images/music.jpg"
        />
        <Navbar open={open} onClick={() => setOpen(!open)} />
        {renderSongs(songs, songIsLoading)}
        <Footer />
      </>
    );
  }

  // Render artists from Spotify API.
  if (songError && !artistError) {
    return (
      <>
        <CustomHead
          title="My music"
          description="Maximilian's top ten artists on Spotify"
          url={`${baseUrl}${router.asPath}`}
          image="/images/music.jpg"
        />
        <Navbar open={open} onClick={() => setOpen(!open)} />
        {renderArtists(artists, artistIsLoading, songError)}
        <Footer />
      </>
    );
  }

  // Render songs and artists from Spotify Api.
  return (
    <>
      <CustomHead
        title="My music"
        description="Maximilian's top ten songs and artists on Spotify"
        url={`${baseUrl}${router.asPath}`}
        image="/images/music.jpg"
      />
      <Navbar open={open} onClick={() => setOpen(!open)} />
      {renderSongs(songs, songIsLoading)}
      {renderArtists(artists, artistIsLoading)}
      <Footer />
    </>
  );
};

function renderSongs(songs: any, songIsLoading: boolean) {
  return (
    <>
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
    </>
  );
}

function renderArtists(
  artists: any,
  artistIsLoading: boolean,
  songError?: boolean,
) {
  if (songError) {
    return (
      <Layout>
        <div className={`${styles.wrapper} ${styles.noMargin}`}>
          <Title title="My music" tag="What I listen to the most" />
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
    );
  } else {
    return (
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
    );
  }
}

export const getStaticProps: GetStaticProps = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  return {
    props: {
      baseUrl,
    },
  };
};

export default TopTenSpotify;
