import Image from "next/image";
import styles from "./index.module.scss";
import Link from "next/link";

const GameItem = ({ id, data }) => {
  const linkGame = data?.title.replace(/ /g, "_");
  const imageUrl = `https://cdn2.softswiss.net/i/s2/${id}.png`;
  return (
    <div className={styles.gameCardOuter}>
      <div className={styles.gameCardInner}>
        <div className={styles.gameImage}>
          <Link href={`/game/${linkGame}`} className={styles.gameLink}>
            {imageUrl && (
              <Image width={100} height={100} alt="" src={imageUrl} />
            )}
          </Link>
        </div>
        <div className={styles.gameCardTitle}>{data?.title}</div>
      </div>
    </div>
  );
};

export default GameItem;
