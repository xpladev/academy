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
      label: '지갑 생성하기',
      link: {
        type: 'generated-index',
        title: '지갑 생성하기',
        // description: '블록체인에서 토큰을 보관하고, 전송하려면 무엇이 필요할까요? 바로 지갑입니다. 직접 지갑을 만들어 보면서 자세히 살펴봅시다.'
        description: '일상에서 현금을 보관하기 위해 지갑을 사용하는 것처럼, 블록체인에서도 토큰을 보관하기 위해 지갑이 필요합니다. 직접 지갑을 만들어 보면서 자세히 살펴봅시다.'
      },
      items: ['settings/create-wallet/create-wallet-with-vault', 'settings/create-wallet/create-wallet-with-js', 'settings/create-wallet/create-wallet-with-xplad', 'settings/create-wallet/get-testnet-xpla'],
    },
    {
      type: 'category',
      label: '트랜잭션 생성하기',
      link: {
        type: 'generated-index',
        title: '트랜잭션 생성하기',
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
      label: '토큰(CW20) 다루기',
      link: {
        type: 'generated-index',
        title: '토큰(CW20) 다루기',
        // description: ''
      },
      items: ['tutorial/make-cw20/make-cw20-with-vault', 'tutorial/make-cw20/make-cw20-with-js', 'tutorial/make-cw20/query-cw20'],
    },
    {
      type: 'category',
      label: 'NFT(CW721) 다루기',
      link: {
        type: 'generated-index',
        title: 'NFT(CW721) 다루기',
        // description: ''
      },
      items: ['tutorial/make-cw721/make-nft-vault', 'tutorial/make-cw721/make-nft-js', 'tutorial/make-cw721/query-cw721'],
    },
    {
      type: 'category',
      label: '심화 - XPLA 블록체인 깊게 이해하기',
      link: {
        type: 'generated-index',
        title: '심화 - XPLA 블록체인 깊게 이해하기',
        // description: ''
      },
      items: ['tutorial/deep-understand-xpla/local-network', 'tutorial/deep-understand-xpla/account-sequence', 'tutorial/deep-understand-xpla/walletprovider', 'tutorial/deep-understand-xpla/write-contract'],
    },
  ],
};

module.exports = sidebars;
