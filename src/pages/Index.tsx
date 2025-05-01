
import React from 'react';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import SocialSidebar from "@/components/dashboard/SocialSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatCard from "@/components/dashboard/StatCard";
import PerformanceChart from "@/components/dashboard/PerformanceChart";
import UpcomingPosts from "@/components/dashboard/UpcomingPosts";
import PlatformEngagement from "@/components/dashboard/PlatformEngagement";
import RecentActivity from "@/components/dashboard/RecentActivity";
import { MessageSquare, TrendingUp, Users } from "lucide-react";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <SocialSidebar />
        <div className="flex-1">
          <div className="flex flex-col h-full">
            <DashboardHeader />
            <div className="p-6">
              <SidebarTrigger className="md:hidden mb-4 bg-white rounded-md shadow-sm border" />
              
              <h2 className="text-lg font-semibold mb-4">Dashboard Overview</h2>
              
              {/* Stats Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                <StatCard 
                  title="Total Followers" 
                  value="24,521" 
                  description="Across all platforms" 
                  icon={<Users />}
                  trend={{ value: 12.5, isPositive: true }}
                />
                <StatCard 
                  title="Engagement Rate" 
                  value="5.8%" 
                  description="Average across platforms" 
                  icon={<MessageSquare />}
                  trend={{ value: 2.1, isPositive: true }}
                />
                <StatCard 
                  title="Growth Rate" 
                  value="3.2%" 
                  description="Monthly average" 
                  icon={<TrendingUp />}
                  trend={{ value: 0.8, isPositive: false }}
                />
              </div>
              
              {/* Charts Row */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                <PerformanceChart />
              </div>
              
              {/* Content and Activity Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1">
                  <UpcomingPosts />
                </div>
                <div className="lg:col-span-1">
                  <PlatformEngagement />
                </div>
                <div className="lg:col-span-1">
                  <RecentActivity />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
