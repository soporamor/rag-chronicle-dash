import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

interface ChartDataPoint {
  timestamp: string;
  accuracy: number;
  latency: number;
  relevance: number;
}

interface PerformanceChartProps {
  data: ChartDataPoint[];
  title: string;
  metric: 'accuracy' | 'latency' | 'relevance';
}

export function PerformanceChart({ data, title, metric }: PerformanceChartProps) {
  const getMetricColor = () => {
    switch (metric) {
      case 'accuracy':
        return '#22c55e'; // success color
      case 'latency':
        return '#f59e0b'; // warning color
      case 'relevance':
        return '#3b82f6'; // primary color
      default:
        return '#3b82f6';
    }
  };

  const formatValue = (value: number) => {
    if (metric === 'latency') {
      return `${value}ms`;
    }
    return `${value}%`;
  };

  return (
    <Card className="bg-gradient-card shadow-subtle">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id={`${metric}Gradient`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={getMetricColor()} stopOpacity={0.3}/>
                  <stop offset="95%" stopColor={getMetricColor()} stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis 
                dataKey="timestamp" 
                tick={{ fontSize: 12 }}
                axisLine={false}
              />
              <YAxis 
                tick={{ fontSize: 12 }}
                axisLine={false}
                tickFormatter={formatValue}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: 'var(--radius)',
                  boxShadow: 'var(--shadow-medium)'
                }}
                formatter={(value: number) => [formatValue(value), title]}
              />
              <Area
                type="monotone"
                dataKey={metric}
                stroke={getMetricColor()}
                strokeWidth={2}
                fill={`url(#${metric}Gradient)`}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}