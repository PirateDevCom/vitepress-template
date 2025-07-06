import { defineConfig } from 'vitepress';
import { navConfig } from "./nav";
import { sidebarConfig } from "./sidebar";

export default defineConfig({
  lang: 'en-US',
  title: "VitePress Template",
  description: "Description placeholder for VitePress Template",
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['script', { src: '/ts/search.ts' }]
  ],

  // Uncomment the following lines to enable sitemap generation
  // sitemap: {
  //   hostname: 'https://example.com'
  // },
  
  lastUpdated: true,
  metaChunk: true,

  markdown: {
    toc: {
      level: [1, 2, 3, 4, 5, 6]
    }
  },
  
  themeConfig: {
    logo: '/img/logo.webp',
    darkModeSwitchLabel: 'Toggle Theme',
    
    // editLink: {
    //   pattern: 'https://github.com/githubOrg/githubRepo/edit/main/docs/:path',
    //   text: 'Edit this page on GitHub'
    // },

    outline: [1, 6],
    
    search: {
      provider: 'local'
    },
    
    nav: navConfig,

    sidebar: sidebarConfig,

    // Uncomment the following lines to enable social links
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/PirateDevCom' },
    //   { icon: 'npm', link: 'https://www.npmjs.com/~piratedev.com' },
    //   { icon: 'youtube', link: 'https://www.youtube.com/@piratedeveloper' },
    //   { icon: 'discord', link: 'https://discord.com/users/piratedev.com/' },
    //   { icon: 'x', link: 'https://x.com/PirateDevCom' }
    // ],
    
    // Uncomment the following lines to enable footer
    // footer: {
    //   message: '<a href="https://piratedev.com/privacy/" style="text-decoration: none" aria-label="Privacy">Privacy Policy</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="https://piratedev.com/tos/" style="text-decoration: none" aria-label="Terms of Service">Terms of Service</a>',
    //   copyright: `Copyright © 2021-${new Date().getFullYear()} Pirate Dev.Com`
    // }
  }
})