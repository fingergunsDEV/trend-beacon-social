
import React from 'react';
import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { 
  Activity,
  Calendar,
  MessageSquare,
  Users,
  TrendingUp, 
} from 'lucide-react';

const SocialSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader className="flex items-center h-14 px-4 border-b">
        <h2 className="text-lg font-bold">Trend Beacon</h2>
      </SidebarHeader>
      <SidebarContent className="px-2">
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton className="w-full" asChild>
                  <a href="#" className="flex items-center">
                    <Activity className="mr-2 h-4 w-4" />
                    <span>Dashboard</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="w-full" asChild>
                  <a href="#" className="flex items-center">
                    <TrendingUp className="mr-2 h-4 w-4" />
                    <span>Analytics</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="w-full" asChild>
                  <a href="#" className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>Content Calendar</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Engagement</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton className="w-full" asChild>
                  <a href="#" className="flex items-center">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    <span>Comments</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="w-full" asChild>
                  <a href="#" className="flex items-center">
                    <Users className="mr-2 h-4 w-4" />
                    <span>Followers</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4 border-t">
        <div className="flex items-center space-x-4">
          <div className="w-2 h-2 rounded-full bg-green-500" />
          <span className="text-sm">Connected platforms: 4</span>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default SocialSidebar;
