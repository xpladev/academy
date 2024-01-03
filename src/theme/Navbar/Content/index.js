import React from 'react';
import Link from "@docusaurus/Link";
import {useThemeConfig, ErrorCauseBoundary} from '@docusaurus/theme-common';
import {
  splitNavbarItems,
  useNavbarMobileSidebar,
} from '@docusaurus/theme-common/internal';
import NavbarItem from '@theme/NavbarItem';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import styles from './styles.module.css';
import clsx from 'clsx';
import useMediaQuery from '@mui/material/useMediaQuery';
import GNBDropdown from "./GNBDropdown"

function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items;
}
function NavbarItems({items}) {
  return (
    <>
      {items.map((item, i) => (
        <ErrorCauseBoundary
          key={i}
          onError={(error) =>
            new Error(
              `A theme navbar item failed to render.
Please double-check the following navbar item (themeConfig.navbar.items) of your Docusaurus config:
${JSON.stringify(item, null, 2)}`,
              {cause: error},
            )
          }>
          <NavbarItem {...item} />
        </ErrorCauseBoundary>
      ))}
    </>
  );
}
function NavbarContentLayout({left, right}) {
  return (
    <div className="navbar__inner max-w-[1180px]">
      <div className="navbar__items">{left}</div>
      <div className="navbar__items navbar__items--right">{right}</div>
    </div>
  );
}
export default function NavbarContent() {
  const mobileSidebar = useNavbarMobileSidebar();
  const items = useNavbarItems();
  const [leftItems, rightItems] = splitNavbarItems(items);
  const isMobile = useMediaQuery('(max-width:996px)');
  
  return (
    <NavbarContentLayout
      left={
        // TODO stop hardcoding items?
        <>
          {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
          <Link aria-label="open-root" to="/" className={clsx("flex items-center max-[270px]:hidden", styles.LogoAcademyLetter)}>
            <div />
          </Link>
          {
            leftItems.map((leftItem, index) => {
              return <NavbarItem key={index} {...leftItem} className={index === 0 ? "text-white text-medium ml-[78px]" : "text-white text-medium ml-[28px]"} />
            })
          }
          <GNBDropdown />
          {/* <div className={clsx("font-semibold ml-10", styles.tool)} /> */}
        </>
      }
      right={
        // TODO stop hardcoding items?
        // Ask the user to add the respective navbar items => more flexible
        <>
          <NavbarItems items={isMobile ? rightItems.filter((item) => item.type !== 'search') : rightItems} />
          {/* <NavbarColorModeToggle className={styles.colorModeToggle} /> */}

        </>
      }
    />
  );
}
