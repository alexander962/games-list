import React, { useState, useEffect, useMemo } from "react";
import GameItem from "../GameItem";
import styles from "./index.module.scss";

const GamesList = ({ games }) => {
  const [visibleGames, setVisibleGames] = useState(12);
  const [filterProvider, setFilterProvider] = useState("");
  const [filterCurrency, setFilterCurrency] = useState("");
  const [filteredGameCount, setFilteredGameCount] = useState(0);

  const getUniqueCurrencies = () => {
    const currenciesSet = new Set();
    for (const game of Object.values(games)) {
      for (const currency in game.real) {
        currenciesSet.add(currency);
      }
    }
    return Array.from(currenciesSet);
  };

  const currencies = useMemo(() => {
    const uniqueCurrencies = getUniqueCurrencies();
    return uniqueCurrencies;
  }, [games]);

  useEffect(() => {
    const filteredGames = filterGames();
    setFilteredGameCount(filteredGames.length);
  }, [filterProvider, filterCurrency, visibleGames]);

  const showMoreGames = () => {
    setVisibleGames((prevVisibleGames) => prevVisibleGames + 12);
  };

  const getUniqueProviders = () => {
    const providersSet = new Set();
    for (const [, game] of Object.entries(games)) {
      providersSet.add(game.provider);
    }
    return Array.from(providersSet);
  };

  const filterGames = () => {
    const gameTitles = new Set(); // To check the uniqueness of game names
    return Object.entries(games)
      .sort(([, gameA], [, gameB]) => {
        return gameB.collections.popularity - gameA.collections.popularity;
      })
      .filter(([id, game]) => {
        if (filterProvider && game.provider !== filterProvider) {
          return false;
        }

        if (filterCurrency && !game.real[filterCurrency]) {
          return false;
        }

        const title = game.title.replace(/\s+/g, " "); // Remove double spaces
        if (gameTitles.has(title)) {
          return false; // A game with the same name has already been added
        }
        gameTitles.add(title);

        return true;
      });
  };

  const filteredGames = filterGames();
  const displayedGames = filteredGames.slice(0, visibleGames);

  return (
    <div className={styles.gamesListContainer}>
      <h2 className={styles.gamesListHeader}>Games List</h2>
      <div className={styles.gamesFilters}>
        <div className={styles.gamesFilterProvider}>
          <label className={styles.filterLabel} htmlFor="providerFilter">
            Провайдер:
          </label>
          <select
            id="providerFilter"
            value={filterProvider}
            onChange={(e) => setFilterProvider(e.target.value)}
          >
            <option value="">Все провайдеры</option>
            {getUniqueProviders().map((provider) => (
              <option key={provider} value={provider}>
                {provider}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={styles.filterLabel} htmlFor="currencyFilter">
            Валюта:
          </label>
          <select
            id="currencyFilter"
            value={filterCurrency}
            onChange={(e) => setFilterCurrency(e.target.value)}
          >
            <option value="">Все валюты</option>
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className={styles.gamesCards}>
        {displayedGames.map(([id, game]) => (
          <GameItem key={id} id={id} data={game} />
        ))}
      </div>
      {filteredGameCount > visibleGames && (
        <button className={styles.showMoreButton} onClick={showMoreGames}>
          Показать ещё
        </button>
      )}
    </div>
  );
};

export default GamesList;
