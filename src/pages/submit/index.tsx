import React from "react";
import Layout from "@theme/Layout";

export default function Submit(): JSX.Element {
  return (
    <Layout
      title={`XPLA ACADEMY`}
      description="Tutorials & Guides for Integrating XPLA into your project! Master the world of XPLA step by step."
    >
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSeFPRrhXfwlQ7qNOnrP0H7jsJ-zdwLeROeBTUTXe0CPxbxLng/viewform?embedded=true"

        className="w-full h-[1120px] my-[20px]"
        
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
    </Layout>
  );
}
