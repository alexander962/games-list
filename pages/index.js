import Head from "next/head";
import { getGames, useGetGamesQuery } from "../store/games/games.api";
import GamesList from "../components/GamesList";
import gamesData from "../public/games.json";

export default function Home({ games }) {
  // Получение данных с API, если бы она работала(сейчас она отдаёт пустой объект)
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
    // Этот блок try/catch загружает данные игр из статического JSON-файла.
    // В реальном приложении данные могут быть получены из API или базы данных.
    return {
      props: {
        games: gamesData,
      },
    };
  } catch (error) {
    // В случае ошибки при загрузке данных, возвращается пустой массив игр.
    return {
      props: {
        games: [],
      },
    };
  }
};
