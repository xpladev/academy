import React from 'react';
import clsx from 'clsx';
import { useThemeConfig } from '@docusaurus/theme-common';
import {
  useHideableNavbar,
  useNavbarMobileSidebar,
} from '@docusaurus/theme-common/internal';
import { translate } from '@docusaurus/Translate';
import NavbarMobileSidebar from '@theme/Navbar/MobileSidebar';
import styles from './styles.module.css';
import BrowserOnly from '@docusaurus/BrowserOnly';
import CloseIcon from '@mui/icons-material/Close';

export const getStorageBannerClosed = (defaultPopup = 'false') => {
  return localStorage.getItem("popup") || defaultPopup;
}

export const setStorageBannerClosed = (popupClose) => {
  localStorage.setItem("popup", popupClose);
}

function NavbarBackdrop(props) {
  return (
    <div
      role="presentation"
      {...props}
      className={clsx('navbar-sidebar__backdrop', props.className)}
    />
  );
}
export default function NavbarLayout({ children }) {
  const {
    navbar: { hideOnScroll, style },
  } = useThemeConfig();
  const mobileSidebar = useNavbarMobileSidebar();
  const { navbarRef, isNavbarVisible } = useHideableNavbar(hideOnScroll);
  const beforeBannerClosed = getStorageBannerClosed() === 'true';
  const [bannerClosed, setBannerClosed] = React.useState(beforeBannerClosed);

  return (
    <>
      <BrowserOnly>
        {
          () => {
            if (bannerClosed) <></>;
            return <div className="fixed z-[200] top-0 h-[60px] w-full flex justify-center items-center px-[16px] bg-white text-black">
              <img className="absolute left-0 " src="/xpla-academy-dev/img/Banner/left.svg" />
              <img className="absolute right-[6px]" src="/xpla-academy-dev/img/Banner/right.svg" />
              <div onClick={() => {
                setStorageBannerClosed('true');
                setBannerClosed(true);
              }} className="right-[16px] font-medium absolute 2xl:right-[50px] flex items-center gap-2 hover:cursor-pointer ">Close <CloseIcon /> </div>
              <div className="relative flex items-center max-w-[1180px] w-[100%]">

                <img className="absolute left-0 mt-2" src="/xpla-academy-dev/img/Banner/banner.svg" />
                <div className="absolute right-0 flex items-center text-[16px] font-medium bannerWord">
                  Period&nbsp;
                  <span className="font-bold ">
                    Aug 18th-27th&nbsp;
                  </span>
                  | Demo Day&nbsp;
                  <span className="font-bold ">
                    Sep 3rd @Seoul
                  </span>
                </div>
              </div>
            </div>
          }
        }
      </BrowserOnly>
      <nav
        ref={navbarRef}
        aria-label={translate({
          id: 'theme.NavBar.navAriaLabel',
          message: 'Main',
          description: 'The ARIA label for the main navigation',
        })}
        className={clsx(
          'navbar',
          'navbar--fixed-top',
          hideOnScroll && [
            styles.navbarHideable,
            !isNavbarVisible && styles.navbarHidden,
          ],
          {
            'navbar--dark': style === 'dark',
            'navbar--primary': style === 'primary',
            'navbar-sidebar--show': mobileSidebar.shown,
          },
          'bg-black',
          'text-white',
          'flex justify-center items-center',
          'py-6',
          'h-[80px]',
          {
            'top-[60px]' : !bannerClosed
          }
        )}>
        {children}
        <NavbarBackdrop onClick={mobileSidebar.toggle} />
        <NavbarMobileSidebar />
      </nav>
    </>

  );
}
