import React from "react";

export default function Cocosgame() {
  const iframe = '<iframe src="/xpla-academy-dev/img/web-desktop/index.html" width="100%" height="100%"></iframe>';
  return (
    <div
      style={{ width: 1440, height: 1200 }}
      dangerouslySetInnerHTML={{ __html: iframe }}
    ></div>
  );
}