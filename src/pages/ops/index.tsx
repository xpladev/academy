import React from "react";
import Layout from "@theme/Layout";
import OpsPage from "@site/src/components/OpsPage"

export default function Tool(): JSX.Element {
  return (
    <Layout
      title={`XPLA ACADEMY`}
      description="Tutorials & Guides for Integrating XPLA into your project! Master the world of XPLA step by step."
    >
      <OpsPage />
    </Layout>
  );
}
