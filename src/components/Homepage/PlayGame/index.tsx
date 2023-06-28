import React from "react";
import styles from "./styles.module.css";
import Cocosgame from "../../Cocosgame";

export default function PlayGame(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="flex flex-1 justify-center text-3xl min-[996px]:text-4xl font-bold py-20">
          Tryout a demo and start building your own game.
        </div>
        <div className="flex justify-center max-h-[700px]">
          <Cocosgame />
        </div>
      </div>
    </section>
  );
}
