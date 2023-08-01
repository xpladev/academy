import CodeBlock from "@theme/CodeBlock";
import React from "react";

export const wpCssCode = `.example-container {
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    border-radius: 4px;
    padding: 24px 32px 24px 32px;
    margin-bottom: 32px;
}

.width-full {
    width: 100%;
}

.button-css {
    background-color: #00B1FF;
    color: white;
    font-weight: 600;
    padding: 8px 16px 8px 16px;
    font-size: 16px;
    border: 0px;
    border-radius: 8px;
}

.button-css:hover {
    cursor: pointer;
    opacity: 0.9;
}

.info-container {
    margin-bottom: 32px;
}

.info-title {
    display: block;
    color: #16161A;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 8px;
}

.info-content {
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    border-radius: 4px;
    width: calc(100% - 24px);
    padding: 8px 12px 8px 12px;
    font-size: 14px;
}

.bottom-button-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.link {
    color: #00B1FF;
    word-break: break-all;
}

.link:hover {
    color: #00B1FF;
}

.warning {
    color: #FF335F;
}`;

export default function CodeWPCss() {
  return (
    <CodeBlock
      className="text-[12px]"
      language="css"
      title="src/index.css"
      showLineNumbers
    >
      {wpCssCode}
    </CodeBlock>
  );
}
