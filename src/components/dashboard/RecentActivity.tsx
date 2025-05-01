
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageSquare, Heart, Users } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock data for recent activities
const activities = [
  {
    id: 1,
    type: "comment",
    user: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg",
      initials: "AJ"
    },
    content: "Great post! When will the next webinar be?",
    time: "5m ago",
    platform: "twitter"
  },
  {
    id: 2,
    type: "like",
    user: {
      name: "Morgan Smith",
      avatar: "/placeholder.svg",
      initials: "MS"
    },
    content: "liked your photo",
    time: "32m ago",
    platform: "instagram"
  },
  {
    id: 3,
    type: "follow",
    user: {
      name: "Taylor Rodriguez",
      avatar: "/placeholder.svg",
      initials: "TR"
    },
    content: "started following you",
    time: "2h ago",
    platform: "linkedin"
  },
  {
    id: 4,
    type: "comment",
    user: {
      name: "Jamie Wilson",
      avatar: "/placeholder.svg",
      initials: "JW"
    },
    content: "Is this product available for international shipping?",
    time: "3h ago",
    platform: "facebook"
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

const activityIcons: Record<string, React.ReactNode> = {
  comment: <MessageSquare className="h-3 w-3" />,
  like: <Heart className="h-3 w-3" />,
  follow: <Users className="h-3 w-3" />
};

const RecentActivity = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-4">
              <Avatar>
                <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
                <AvatarFallback>{activity.user.initials}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center">
                  <p className="text-sm font-medium leading-none">{activity.user.name}</p>
                  <div className={cn("flex items-center ml-auto rounded-full px-1.5 py-0.5 text-xs", 
                    platformColors[activity.platform] ? `${platformColors[activity.platform]}/10` : "bg-gray-100"
                  )}>
                    {activityIcons[activity.type]}
                    <span className={cn("ml-1 capitalize", 
                      platformColors[activity.platform] 
                        ? platformColors[activity.platform].replace("bg-", "text-") 
                        : "text-gray-500"
                    )}>
                      {activity.platform}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-500">{activity.content}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
