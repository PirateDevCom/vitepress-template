// sidebarTypes.ts

// Define the type for a single sidebar item
export interface SidebarItem {
    text: string;
    link: string;
}

// Define the type for a sidebar group
export interface SidebarGroup {
    text: string;
    items: SidebarItem[];
}

// Define the type for the entire sidebar
export type Sidebar = SidebarGroup[];