import React, { useEffect, useState } from "react";
import clsx from "clsx";
import "./Cocosgame.css";
import {isMobile} from 'react-device-detect';

export default function Cocosgame() {
  if (isMobile) {
    return <img src="/img/PlayGame/comingsoon.svg" />;
  }
  const [over920and830, setOver920and830] = useState(true);
  const [withWidth, setWithWidth] = useState(false);
  const [withHeight, setWithHeight] = useState(false);

  useEffect(() => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    if (w >= 920 && h >= 830) {
      setOver920and830(true);
      setWithWidth(false);
      setWithHeight(false);
      return;
    } else if (h * 92 > w * 83) {
      setOver920and830(false);
      setWithWidth(true);
      setWithHeight(false);
    } else {
      setOver920and830(false);
      setWithWidth(false);
      setWithHeight(true);
    }
  }, []);

  window.onresize = function (event) {
    const w = window.innerWidth;
    const h = window.innerHeight;

    if (w >= 920 && h >= 830) {
      setOver920and830(true);
      setWithWidth(false);
      setWithHeight(false);
      return;
    } else if (h * 92 > w * 83) {
      setOver920and830(false);
      setWithWidth(true);
      setWithHeight(false);
    } else {
      setOver920and830(false);
      setWithWidth(false);
      setWithHeight(true);
    }
  };

  const iframe =
    '<iframe src="/img/web-desktop/index.html" width="100%" height="100%" scrolling ="no" ></iframe>';
  return (
    <div
      className={clsx("z-10", {
        "w-[900px] h-[750px]": over920and830,
        setWithWidth: withWidth,
        setWithHeight: withHeight,
      })}
      dangerouslySetInnerHTML={{ __html: iframe }}
    ></div>
  );
}
