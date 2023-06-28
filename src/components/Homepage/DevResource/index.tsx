import React from "react";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import SquareButton from "../../SquareButton";

export default function DevResource({moveToElement} : {moveToElement : React.MutableRefObject<HTMLDivElement>}): JSX.Element {
  return (
    <section className={styles.features} >
      <div ref={moveToElement} className="container pb-40 px-60">
        <div className="flex flex-1 justify-center text-3xl min-[996px]:text-4xl font-bold py-20">
          Dev Resource
        </div>
        <div className="flex flex-1 justify-between">
          <div className="flex flex-1 justify-center">
            <Link
              className="button button--secondary button--lg w-full h-full flex items-center justify-center "
              to="https://docs.xpla.io/docs/"
            >
              <h1>XPLA Docs</h1>
            </Link>
          </div>
          <div className="flex flex-1 p-10 grid grid-cols-4 gap-4">
            <SquareButton contents="xpla.js" link="https://docs.xpla.io/docs/develop/tools/xpla-js/get-started-with-xpla-js/" />
            <SquareButton contents="xplad" link="https://docs.xpla.io/docs/develop/tools/xplad/install-xplad/"  />
            <SquareButton contents="Vault" link="https://vault.xpla.io/"  />
            <SquareButton contents="Faucet" link="https://faucet.xpla.io/"  />
            <SquareButton contents="Explorer" link="https://explorer.xpla.io/"  />
            <SquareButton contents="Finder" link="https://finder.xpla.io/"  />
            <SquareButton contents="Swagger" link="https://dimension-lcd.xpla.dev/swagger/"  />
            <SquareButton contents="Github" link="https://github.com/xpladev"  />
          </div>
        </div>
      </div>
    </section>
  );
}
