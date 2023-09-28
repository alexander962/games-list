import Head from "next/head";
import { getGames, useGetGamesQuery } from "../store/games/games.api";
import GamesList from "../components/GamesList";
import gamesData from "../public/games.json";

export default function Home({ games }) {
  // const { data: games, isLoading, isError } = useGetGamesQuery();
  //
  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }
  //
  // if (isError) {
  //   return <div>Error loading games.</div>;
  // }

  return (
    <div>
      <Head>
        <title>Game list</title>
        <meta name="description" content="Game list" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <GamesList games={games} />
      </main>
    </div>
  );
}
export const getServerSideProps = async () => {
  try {
    return {
      props: {
        games: gamesData,
      },
    };
  } catch (error) {
    return {
      props: {
        games: [],
      },
    };
  }
};
