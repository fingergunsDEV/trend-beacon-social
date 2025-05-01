
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const data = [
  { name: 'Jan', facebook: 4000, twitter: 2400, instagram: 2400 },
  { name: 'Feb', facebook: 3000, twitter: 1398, instagram: 2210 },
  { name: 'Mar', facebook: 2000, twitter: 9800, instagram: 2290 },
  { name: 'Apr', facebook: 2780, twitter: 3908, instagram: 2000 },
  { name: 'May', facebook: 1890, twitter: 4800, instagram: 2181 },
  { name: 'Jun', facebook: 2390, twitter: 3800, instagram: 2500 },
  { name: 'Jul', facebook: 3490, twitter: 4300, instagram: 2100 },
];

const PerformanceChart = () => {
  const [period, setPeriod] = React.useState('7d');

  return (
    <Card className="col-span-3">
      <CardHeader className="flex flex-row items-center justify-between pb-8">
        <CardTitle>Social Performance</CardTitle>
        <div className="flex items-center">
          <TabsList>
            <TabsTrigger 
              value="7d" 
              onClick={() => setPeriod('7d')}
              className={period === '7d' ? 'data-[state=active]:bg-primary data-[state=active]:text-white' : ''}
            >
              7d
            </TabsTrigger>
            <TabsTrigger 
              value="30d" 
              onClick={() => setPeriod('30d')}
              className={period === '30d' ? 'data-[state=active]:bg-primary data-[state=active]:text-white' : ''}
            >
              30d
            </TabsTrigger>
            <TabsTrigger 
              value="90d" 
              onClick={() => setPeriod('90d')}
              className={period === '90d' ? 'data-[state=active]:bg-primary data-[state=active]:text-white' : ''}
            >
              90d
            </TabsTrigger>
          </TabsList>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart
            data={data}
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
