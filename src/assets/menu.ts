export interface MainMenuItem {
  content: string
  url: string
  submenu?: MainMenuItem[]
}

export const mainMenu: MainMenuItem[] = [
  {
    content: 'Solution',
    url: 'solution',
    submenu: [
      {
        content: 'Video Processing',
        url: 'solution/video-rocessing',
      },
      {
        content: 'Security',
        url: 'solution/security',
      },
      {
        content: 'OTT',
        url: 'solution/OTT',
      },
    ],
  },
  {
    content: 'News',
    url: 'news',
  },
  {
    content: 'Partners',
    url: 'partners',
  },
  {
    content: 'Contact',
    url: 'contact',
  },
]

export interface LanguageMenu {
  content: string
  icon: string
}
