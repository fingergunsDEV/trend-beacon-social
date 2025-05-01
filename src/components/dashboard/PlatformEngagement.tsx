
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

// Mock data for platform engagement
const platforms = [
  {
    name: "Facebook",
    engagement: 68,
    color: "bg-social-facebook"
  },
  {
    name: "Twitter",
    engagement: 82,
    color: "bg-social-twitter"
  },
  {
    name: "Instagram",
    engagement: 94,
    color: "bg-social-instagram"
  },
  {
    name: "LinkedIn",
    engagement: 57,
    color: "bg-social-linkedin"
  }
];

const PlatformEngagement = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Platform Engagement</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {platforms.map((platform) => (
            <div key={platform.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{platform.name}</span>
                <span className="text-sm text-muted-foreground">{platform.engagement}%</span>
              </div>
              <Progress
                value={platform.engagement}
                className={cn("h-2", platform.color)}
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PlatformEngagement;
