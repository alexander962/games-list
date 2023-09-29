import Head from "next/head";
import { useGetGamesQuery } from "../store/games/games.api";
import { getGames } from "./api/route";
import GamesList from "../components/GamesList";

export default function Home({ games }) {
  // Получение данных с API, если бы она работала(сейчас API отдаёт пустой объект)
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
    const games = await getGames();
    return {
      props: {
        games,
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
