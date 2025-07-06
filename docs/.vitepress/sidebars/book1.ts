import { Sidebar } from '../sidebarTypes';

export const book1Sidebar: Sidebar = [
  {
    text: "Book1",
    items: [
      { text: 'Introduction', link: '/book1/basics/introduction' },
      { text: 'Installation', link: '/book1/basics/installation' }
    ]
  },
  {
    text: 'Chapter1',
    items: [
      { text: 'page 1', link: '/book1/chapter1/page1' }
    ]
  }
]