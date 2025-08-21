import * as React from "react"
import {
  Library,
  GalleryVerticalEnd,
  Settings2,
  SquareTerminal,
  Calendar,
  LibraryBig
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { TeamSwitcher1 } from "./team-switcher1"
import { NavUser1 } from "./nav-user1"
import { NavMain1 } from "./nav-main1"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
      ],
    },
    {
      title: "Courses",
      url: "#",
      icon: LibraryBig,
      items: [
       
      ],
    },
    {
      title: "My Courses",
      url: "#",
      icon: Library,
      items: [
      ],
    },
    {
      title: "Calender",
      url: "#",
      icon: Calendar,
      items: [
      
      ],
    },
     {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
      
      ],
    },
  ],

}

export function AppSidebar1({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher1 teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain1 items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser1 user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
