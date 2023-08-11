import React from 'react';
import NavbarLayout from '@theme/Navbar/Layout';
import NavbarContent from '@theme/Navbar/Content';
import "./index.css";
import Banner from "./Banner";



export default function Navbar() {
  return (
    <>
      <Banner />
      <NavbarLayout>
        <NavbarContent />
      </NavbarLayout>
    </>
  );
}
