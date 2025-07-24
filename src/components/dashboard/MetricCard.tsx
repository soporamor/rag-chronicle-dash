import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number;
  change: number;
  changeLabel?: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error';
}

export function MetricCard({ 
  title, 
  value, 
  change, 
  changeLabel, 
  icon, 
  variant = 'default' 
}: MetricCardProps) {
  const getTrendIcon = () => {
    if (change > 0) return <TrendingUp className="h-4 w-4" />;
    if (change < 0) return <TrendingDown className="h-4 w-4" />;
    return <Minus className="h-4 w-4" />;
  };

  const getTrendColor = () => {
    if (change > 0) return "text-success";
    if (change < 0) return "text-destructive";
    return "text-muted-foreground";
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'success':
        return 'border-l-4 border-l-success bg-gradient-card';
      case 'warning':
        return 'border-l-4 border-l-warning bg-gradient-card';
      case 'error':
        return 'border-l-4 border-l-destructive bg-gradient-card';
      default:
        return 'border-l-4 border-l-primary bg-gradient-card';
    }
  };

  return (
    <Card className={`p-6 transition-smooth hover:shadow-medium ${getVariantStyles()}`}>
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <div className="flex items-center gap-2">
            <p className="text-2xl font-bold">{value}</p>
            {icon && (
              <div className="text-primary">
                {icon}
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="mt-4 flex items-center gap-2">
        <div className={`flex items-center gap-1 ${getTrendColor()}`}>
          {getTrendIcon()}
          <span className="text-sm font-medium">
            {Math.abs(change)}%
          </span>
        </div>
        <span className="text-sm text-muted-foreground">
          {changeLabel || 'vs período anterior'}
        </span>
      </div>
    </Card>
  );
}