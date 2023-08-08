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
    'overview/gameArchitecture',

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
      label: 'Create Wallet',
      link: {
        type: 'generated-index',
        title: 'Create Wallet',
        // description: '블록체인에서 토큰을 보관하고, 전송하려면 무엇이 필요할까요? 바로 지갑입니다. 직접 지갑을 만들어 보면서 자세히 살펴봅시다.'
        description: '일상에서 현금을 보관하기 위해 지갑을 사용하는 것처럼, 블록체인에서도 토큰을 보관하기 위해 지갑이 필요합니다. 직접 지갑을 만들어 보면서 자세히 살펴봅시다.'
      },
      items: ['settings/create-wallet/create-wallet-with-vault', 'settings/create-wallet/create-wallet-with-js', 'settings/create-wallet/create-wallet-with-xplad', 'settings/create-wallet/get-testnet-xpla'],
    },
    {
      type: 'category',
      label: 'Create Testnet Transaction',
      link: {
        type: 'generated-index',
        title: 'Create Testnet Transaction',
        description: 'XPLA 테스트넷 토큰을 이용하여 블록체인에 데이터를 기록해봅시다.'
      },
      items: ['settings/create-testnet-transaction/send-tx', 'settings/create-testnet-transaction/check-tx-in-explorer', 'settings/create-testnet-transaction/send-query', 'settings/create-testnet-transaction/use-xplad'],
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
      label: '게임 토큰(CW20) 다루기',
      link: {
        type: 'generated-index',
        title: '게임 토큰(CW20) 다루기',
        // description: ''
      },
      items: ['tutorial/make-web3-game/download-code', 'tutorial/make-web3-game/make-cw20-with-vault', 'tutorial/make-web3-game/make-cw20-with-js', 'tutorial/make-web3-game/query-cw20'],
    },
    {
      type: 'category',
      label: 'NFT(CW721) 다루기',
      link: {
        type: 'generated-index',
        title: 'NFT(CW721) 다루기',
        // description: ''
      },
      items: ['tutorial/add-func-to-game-1/overview', 'tutorial/add-func-to-game-1/make-nft-vault', 'tutorial/add-func-to-game-1/make-nft-js', 'tutorial/add-func-to-game-1/query-cw721'],
    },
    {
      type: 'category',
      label: '심화 - XPLA 블록체인 깊게 이해하기',
      link: {
        type: 'generated-index',
        title: '심화 - XPLA 블록체인 깊게 이해하기',
        // description: ''
      },
      items: ['tutorial/add-func-to-game-2/local-network', 'tutorial/add-func-to-game-2/account-sequence', 'tutorial/add-func-to-game-2/walletprovider', 'tutorial/add-func-to-game-2/write-contract'],
    },
  ],
};

module.exports = sidebars;
