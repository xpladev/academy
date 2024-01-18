import React from "react";
import Layout from "@theme/Layout";

export default function Feedback(): JSX.Element {
  return (
    <Layout
      title={`XPLA ACADEMY`}
      description="Tutorials & Guides for Integrating XPLA into your project! Master the world of XPLA step by step."
    >
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfs7a8PiSM0QaeZYO5hhCOqsrS1DotVHNEpK8jpgh29VXwDZA/viewform?embedded=true"
        className="w-full h-[1500px] my-[20px]"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
    </Layout>
  );
}

