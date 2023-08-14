import React from 'react';
import NavbarLayout from '@theme/Navbar/Layout';
import NavbarContent from '@theme/Navbar/Content';
import "./index.css";
import Banner from "./Banner";
import BrowserOnly from '@docusaurus/BrowserOnly';



export default function Navbar() {
  return (
    <>
      <BrowserOnly>
        {
          () => <Banner />
        }
      </BrowserOnly>
      <NavbarLayout>
        <NavbarContent />
      </NavbarLayout>
    </>
  );
}
