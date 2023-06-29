import React from "react";
import styles from "./styles.module.css";
import SquareButton from "../../SquareButton";
import Button from "../../Button";
import Banner from "../../Slider/Banner";

export default function JoinCommunity(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container pb-40 px-10 ">
        <div className="flex flex-1 justify-center text-3xl min-[996px]:text-4xl font-bold py-20">
          Join XPLA DEV Community
        </div>

        <div
          className="p-20 mb-10 flex flex-col w-full justify-center items-center rounded-lg break-words whitespace-normal"
          style={{
            backgroundColor: "#ebedf0",
          }}
        >
          <h1>XPLA Trailblazer</h1>
          <Button contents={"Register Now"} />
        </div>

        <div className="flex flex-1 pb-10 grid grid-cols-3 gap-4">
          <SquareButton
            contents="XPLA DEV Discord"
            link="https://github.com/nglsena0722c/xpla-academy-dev/discussions/categories/announcements"
          />
          <SquareButton
            contents="XPLA Github Discussion"
            link="https://github.com/nglsena0722c/xpla-academy-dev/discussions/categories/announcements"
          />
          <SquareButton
            contents="XPLA Dev Co-Building"
            link="https://github.com/nglsena0722c/xpla-academy-dev/discussions/categories/announcements"
          />
        </div>

        <div
          className="p-20 flex flex-col w-full justify-center items-center rounded-lg break-words whitespace-normal"
          style={{
            backgroundColor: "#ebedf0",
          }}
        >
          <h1>DEV Events</h1>
          <Button contents={"Enter Now"} />
        </div>

        <Banner  />

        <div
          className="p-20 mb-10 flex flex-1 w-full justify-between items-center rounded-lg break-words whitespace-normal"
          style={{
            backgroundColor: "#ebedf0",
          }}
        >
          <h1>Techinal partnership</h1>
          <Button contents={"Contract us"} />
        </div>


      </div>
    </section>
  );
}
