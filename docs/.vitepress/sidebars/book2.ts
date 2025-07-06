import { Sidebar } from '../sidebarTypes';

export const book2Sidebar: Sidebar = [
  {
    text: "Book2",
    items: [
      { text: 'Introduction', link: '/book2/basics/introduction' },
      { text: 'Installation', link: '/book2/basics/installation' }
    ]
  },
  {
    text: 'Chapter1',
    items: [
      { text: 'page 1', link: '/book2/chapter1/page1' }
    ]
  }
]