import Head from "next/head";
import { useGetGamesQuery } from "../store/games/games.api";
import { getGames } from "./api/route";
import GamesList from "../components/GamesList";

export default function Home({ games }) {
  // Receiving data from the API if it worked (now the API returns an empty object)
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
        <title>Games list</title>
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
    // This try/catch block loads game data from a static JSON file.
    // In a real application, the data can be obtained from an API or a database.
    const games = await getGames();
    return {
      props: {
        games,
      },
    };
  } catch (error) {
    // If there is an error loading data, an empty array of games is returned.
    return {
      props: {
        games: [],
      },
    };
  }
};
