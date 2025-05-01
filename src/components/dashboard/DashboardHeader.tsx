
import React from 'react';
import { Button } from "@/components/ui/button";
import { Plus, BellDot, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const DashboardHeader = () => {
  return (
    <div className="flex items-center justify-between w-full p-4 border-b">
      <div className="flex-1">
        <h1 className="text-xl font-bold">Social Dashboard</h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-60 pl-8 rounded-md"
          />
        </div>
        <Button size="sm" variant="outline" className="relative">
          <BellDot className="h-4 w-4" />
          <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 flex items-center justify-center text-[10px] text-white">
            3
          </span>
        </Button>
        <Button size="sm">
          <Plus className="mr-2 h-4 w-4" />
          Create Post
        </Button>
        <Avatar>
          <AvatarImage src="/placeholder.svg" alt="User" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default DashboardHeader;
