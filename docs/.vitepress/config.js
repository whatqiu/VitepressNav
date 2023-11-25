module.exports = {
    title: '星导航',
    description: 'Just playing around.',
    themeConfig: {
      logo: '/logo.jpg',
      nav: [
        { text: 'Guide', link: '/guide' },
        {
          text: 'Dropdown Menu',
          items: [
            { text: 'Item A', link: '/item-1' },
            { text: 'Item B', link: '/item-2' },
            { text: 'Item C', link: '/item-3' }
          ]
        }
      ]
    }
  }