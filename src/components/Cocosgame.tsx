import React from "react";

export default function Cocosgame() {
  const iframe = '<iframe src="/img/web-desktop/index.html" width="100%" height="100%" scrolling ="no" ></iframe>';
  return (
    <div
      style={{ width: 900, height: 750 }}
      dangerouslySetInnerHTML={{ __html: iframe }}
    ></div>
  );
}