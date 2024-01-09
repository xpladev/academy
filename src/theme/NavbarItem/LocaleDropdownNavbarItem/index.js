import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useAlternatePageUtils } from '@docusaurus/theme-common/internal';
import { translate } from '@docusaurus/Translate';
import { useLocation } from '@docusaurus/router';
import DropdownNavbarItem from '../DropdownNavbarItem';
import LanguageIcon from '@mui/icons-material/Language';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function LocaleDropdownNavbarItem({
  mobile,
  dropdownItemsBefore,
  dropdownItemsAfter,
  ...props
}) {
  const {
    i18n: { currentLocale, locales, localeConfigs },
  } = useDocusaurusContext();
  const alternatePageUtils = useAlternatePageUtils();
  const { search, hash } = useLocation();
  const localeItems = locales.map((locale) => {
    const baseTo = `pathname://${alternatePageUtils.createUrl({
      locale,
      fullyQualified: false,
    })}`;
    // preserve ?search#hash suffix on locale switches
    const to = `${baseTo}${search}${hash}`;
    return {
      label: localeConfigs[locale].label,
      lang: localeConfigs[locale].htmlLang,
      to,
      target: '_self',
      autoAddBaseUrl: false,
      className:
        // eslint-disable-next-line no-nested-ternary
        locale === currentLocale
          ? // Similar idea as DefaultNavbarItem: select the right Infima active
          // class name. This cannot be substituted with isActive, because the
          // target URLs contain `pathname://` and therefore are not NavLinks!
          mobile
            ? 'menu__link--active'
            : 'dropdown__link--active'
          : '',
    };
  });
  const items = [...dropdownItemsBefore, ...localeItems, ...dropdownItemsAfter];
  // Mobile is handled a bit differently
  const dropdownLabel = mobile
    ? translate({
      message: 'Languages',
      id: 'theme.navbar.mobileLanguageDropdown.label',
      description: 'The label for the mobile language switcher dropdown',
    })
    : localeConfigs[currentLocale].label;
  return <BrowserOnly>
    {
      () => (<div className='mr-[11px] mt-[10px]'>
        <DropdownNavbarItem
          {...props}
          disable={!window.location.pathname.startsWith('/startlearning')}
          arrow={false}
          mobile={mobile}
          label={
            <LanguageIcon sx={{ fontSize: 29, color: window.location.pathname.startsWith('/startlearning') ? 'white' : '#FFFFFF33' }} />
        }
          items={items}
        />
      </div>
      )
    }
  </BrowserOnly>
}
