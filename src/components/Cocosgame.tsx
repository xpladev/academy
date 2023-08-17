import React from "react";

export default function Cocosgame() {
  const iframe = '<iframe src="/academy/img/web-desktop/index.html" width="100%" height="100%"></iframe>';
  return (
    <div
      style={{ width: 1000, height: 800 }}
      dangerouslySetInnerHTML={{ __html: iframe }}
    ></div>
  );
}