
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock data for upcoming posts
const upcomingPosts = [
  {
    id: 1,
    content: "Launch announcement for our new product line! #NewLaunch",
    date: "2025-05-02T10:00:00",
    platform: "twitter",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    content: "Behind the scenes look at our design process",
    date: "2025-05-03T14:30:00",
    platform: "instagram",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    content: "Join our webinar on the future of social media marketing",
    date: "2025-05-04T16:00:00",
    platform: "linkedin",
    image: null
  }
];

const platformColors: Record<string, string> = {
  facebook: "bg-social-facebook",
  twitter: "bg-social-twitter",
  instagram: "bg-social-instagram",
  linkedin: "bg-social-linkedin",
  youtube: "bg-social-youtube",
  pinterest: "bg-social-pinterest",
};

const getPlatformColor = (platform: string) => {
  return platformColors[platform] || "bg-gray-500";
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
};

const UpcomingPosts = () => {
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Upcoming Posts</CardTitle>
            <CardDescription>Your scheduled content</CardDescription>
          </div>
          <Calendar className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {upcomingPosts.map((post) => (
            <div key={post.id} className="flex items-start space-x-4 border-b pb-4 last:border-0">
              {post.image && (
                <Avatar className="h-12 w-12 rounded-md">
                  <AvatarImage src={post.image} alt="Post preview" className="object-cover" />
                  <AvatarFallback>IMG</AvatarFallback>
                </Avatar>
              )}
              <div className="flex-1">
                <p className="text-sm line-clamp-2">{post.content}</p>
                <div className="flex items-center mt-2 text-xs text-muted-foreground">
                  <Badge variant="secondary" className={cn("h-2 w-2 rounded-full p-0 mr-1", getPlatformColor(post.platform))} />
                  <span className="capitalize mr-2">{post.platform}</span>
                  <span>{formatDate(post.date)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default UpcomingPosts;
