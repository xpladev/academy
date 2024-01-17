import React from "react";
import Layout from "@theme/Layout";

export default function Submit(): JSX.Element {
  return (
    <Layout
      title={`XPLA ACADEMY`}
      description="Tutorials & Guides for Integrating XPLA into your project! Master the world of XPLA step by step."
    >
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScgrORlPZ9Hjnx4oIUqX3UHFaidEEDrYUMtmOu4_14Le9l8NQ/viewform?embedded=true"
        className="w-full h-[1200px] my-[20px] overflow-hidden"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
    </Layout>
  );
}
