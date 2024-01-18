// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebars = {
  tutorialSidebar: [
    // Section title
    {
      type: 'html',
      className: 'sidebar-title',
      value: 'Overview',
      defaultStyle: true,
    },
    'overview/intro',
    'overview/demoGameOverview',
    {
      type: 'html',
      value: '<span class="sidebar-divider" />',
    },

    // Section title
    {
      type: 'html',
      className: 'sidebar-title',
      value: 'Settings',
      defaultStyle: true,
    },
    {
      type: 'category',
      label: `Let's get your Wallet ready!`,
      link: {
        type: 'generated-index',
        title: `Let's get your Wallet ready!`,
        description: `Just as we carry wallets to keep our cash safe in our everyday routines, in the blockchain world, we need Wallets to hold onto tokens (or any other digital assets). Let's take a closer look by creating a Wallet ourselves.`
      },
      items: ['settings/create-wallet/create-wallet-with-vault', 'settings/create-wallet/create-wallet-with-js', 'settings/create-wallet/get-testnet-xpla'],
    },
    {
      type: 'category',
      label: 'Time to Make Transactions!',
      link: {
        type: 'generated-index',
        title: 'Time to Make Transactions!',
        description: `Let's use the $XPLA testnet coins to leave a mark in the blockchain!`
      },
      items: ['settings/create-testnet-transaction/send-tx', 'settings/create-testnet-transaction/check-tx-in-explorer', 'settings/create-testnet-transaction/send-query'],
    },
    {
      type: 'html',
      value: '<span class="sidebar-divider" />',
    },

    // Section title
    {
      type: 'html',
      className: 'sidebar-title',
      value: 'Code Along Tutorial',
      defaultStyle: true,
    },
    {
      type: 'category',
      label: 'Utilize Tokens (CW20)',
      link: {
        type: 'generated-index',
        title: 'Utilize Tokens (CW20)',
        // description: ''
      },
      items: ['tutorial/make-cw20/make-cw20-with-vault', 'tutorial/make-cw20/make-cw20-with-js', 'tutorial/make-cw20/query-cw20'],
    },
    {
      type: 'category',
      label: 'Utilize NFT(CW721)',
      link: {
        type: 'generated-index',
        title: 'Utilize NFT(CW721)',
        // description: ''
      },
      items: ['tutorial/make-cw721/make-nft-vault', 'tutorial/make-cw721/make-nft-js', 'tutorial/make-cw721/query-cw721', 'tutorial/make-cw721/send-cw721'],
    },
    {
      type: 'category',
      label: 'Advanced - Dive deep into XPLA blockchain',
      link: {
        type: 'generated-index',
        title: 'Advanced - Dive deep into XPLA blockchain',
        // description: ''
      },
      items: ['tutorial/deep-understand-xpla/local-network', 'tutorial/deep-understand-xpla/account-sequence', 'tutorial/deep-understand-xpla/walletprovider', 'tutorial/deep-understand-xpla/write-contract', 'tutorial/deep-understand-xpla/convert', 'tutorial/deep-understand-xpla/swap'],
    },
  ],
};

module.exports = sidebars;
