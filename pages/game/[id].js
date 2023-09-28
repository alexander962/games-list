import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./index.module.scss";

const GamePage = () => {
  const router = useRouter();
  const { id } = router?.query;
  const formattedTitle = id ? id.toString().replace(/_/g, " ") : "";

  return (
    <div className={styles.gameContainer}>
      <p className={styles.gameTitle}>{formattedTitle}</p>
      <Link className={styles.backLink} href="/">
        На главную
      </Link>
    </div>
  );
};

export default GamePage;
