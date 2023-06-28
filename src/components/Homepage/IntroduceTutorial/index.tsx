import React from "react";
import styles from "./styles.module.css";
import Slider from "../../Slider";
import Button from "../../Button";

export default function PlayGame(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container mb-20">
        <div className="flex flex-1 justify-center text-3xl min-[996px]:text-4xl font-bold py-8">
          Tutorial 소개 문장
        </div>
        <div className="flex justify-center">
          <Slider
            elements={[<First />, <Second />, <Third />, <Fourth />, <Fifth />]}
          />
        </div>
      </div>
    </section>
  );
}

const First = () => {
  return (
    <div className="flex justify-center py-40 border-solid border-2 border-gray-600 my-12 mx-60">
      <Button
        contents={"Learn More : Create Wallet"}
        link={"/docs/category/create-wallet"}
      />
    </div>
  );
};

const Second = () => {
  return (
    <div className="flex justify-center py-40 border-solid border-2 border-gray-600 my-12 mx-60">
      <Button
        contents={"Learn More : Create Testnet Tx"}
        link={"/docs/category/create-testnet-transaction"}
      />
    </div>
  );
};
const Third = () => {
  return (
    <div className="flex justify-center py-40 border-solid border-2 border-gray-600 my-12 mx-60">
      <Button
        contents={"Learn More : CW20 Send"}
        link={"/docs/category/web-30-게임-구축하기--벽돌깨기"}
      />
    </div>
  );
};

const Fourth = () => {
  return (
    <div className="flex justify-center py-40 border-solid border-2 border-gray-600 my-12 mx-60">
      <Button
        contents={"Learn More : NFT&Contract"}
        link={"/docs/category/게임에-web-30-기능-더하기-1"}
      />
    </div>
  );
};

const Fifth = () => {
  return (
    <div className="flex justify-center py-40 border-solid border-2 border-gray-600 my-12 mx-60">
      <Button
        contents={"Learn More : Wallet Connect"}
        link={"/docs/category/게임에-web-30-기능-더하기-2"}
      />
    </div>
  );
};
