import React from "react";
import Layout from "@theme/Layout";
import ToolPage from "@site/src/components/Tool"

export default function Tool(): JSX.Element {
  return (
    <Layout
      title={`XPLA ACADEMY`}
      description="Tutorials & Guides for Integrating XPLA into your project! Master the world of XPLA step by step."
    >
      <ToolPage />
    </Layout>
  );
}
