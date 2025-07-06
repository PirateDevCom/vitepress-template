import { Sidebar } from './sidebarTypes';
import { book1Sidebar } from "./sidebars/book1";
import { book2Sidebar } from "./sidebars/book2";
import { book3Sidebar } from "./sidebars/book3";

export type SidebarConfig = Record<string, Sidebar>;

export const sidebarConfig: SidebarConfig = {
  '/book1/': book1Sidebar,
  '/book2/': book2Sidebar,
  '/book3/': book3Sidebar
}