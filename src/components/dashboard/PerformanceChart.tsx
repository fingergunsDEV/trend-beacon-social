
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Data for different time periods
const data7d = [
  { name: 'Mon', facebook: 2100, twitter: 1400, instagram: 1900 },
  { name: 'Tue', facebook: 2300, twitter: 1600, instagram: 2100 },
  { name: 'Wed', facebook: 2500, twitter: 1900, instagram: 2300 },
  { name: 'Thu', facebook: 2200, twitter: 2100, instagram: 2400 },
  { name: 'Fri', facebook: 2800, twitter: 2300, instagram: 2600 },
  { name: 'Sat', facebook: 3100, twitter: 2000, instagram: 2900 },
  { name: 'Sun', facebook: 2900, twitter: 1800, instagram: 2700 },
];

const data30d = [
  { name: 'Week 1', facebook: 12000, twitter: 8400, instagram: 10200 },
  { name: 'Week 2', facebook: 14000, twitter: 9300, instagram: 11400 },
  { name: 'Week 3', facebook: 13500, twitter: 9800, instagram: 12200 },
  { name: 'Week 4', facebook: 15800, twitter: 10100, instagram: 13500 },
];

const data90d = [
  { name: 'Jan', facebook: 32000, twitter: 19400, instagram: 24000 },
  { name: 'Feb', facebook: 34000, twitter: 21300, instagram: 28100 },
  { name: 'Mar', facebook: 38000, twitter: 23800, instagram: 31000 },
];

const PerformanceChart = () => {
  const [period, setPeriod] = React.useState('7d');

  // Select the appropriate data based on the selected period
  const getChartData = () => {
    switch(period) {
      case '7d':
        return data7d;
      case '30d':
        return data30d;
      case '90d':
        return data90d;
      default:
        return data7d;
    }
  };

  return (
    <Card className="col-span-3">
      <CardHeader className="flex flex-row items-center justify-between pb-8">
        <CardTitle>Social Performance</CardTitle>
        <div className="flex items-center">
          <Tabs defaultValue="7d" value={period} onValueChange={setPeriod}>
            <TabsList>
              <TabsTrigger value="7d">7d</TabsTrigger>
              <TabsTrigger value="30d">30d</TabsTrigger>
              <TabsTrigger value="90d">90d</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart
            data={getChartData()}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="twitter" stroke="#1DA1F2" fill="#1DA1F2" fillOpacity={0.3} />
            <Area type="monotone" dataKey="facebook" stroke="#1877F2" fill="#1877F2" fillOpacity={0.3} />
            <Area type="monotone" dataKey="instagram" stroke="#E4405F" fill="#E4405F" fillOpacity={0.3} />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default PerformanceChart;
