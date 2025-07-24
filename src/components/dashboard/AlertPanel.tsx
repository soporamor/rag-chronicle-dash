import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle, Info, CheckCircle } from "lucide-react";

interface AlertItem {
  id: string;
  type: 'warning' | 'info' | 'success';
  title: string;
  description: string;
  timestamp: string;
}

interface AlertPanelProps {
  alerts: AlertItem[];
}

export function AlertPanel({ alerts }: AlertPanelProps) {
  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'warning':
        return <AlertTriangle className="h-4 w-4" />;
      case 'success':
        return <CheckCircle className="h-4 w-4" />;
      default:
        return <Info className="h-4 w-4" />;
    }
  };

  const getAlertVariant = (type: string) => {
    switch (type) {
      case 'warning':
        return 'destructive';
      default:
        return 'default';
    }
  };

  return (
    <Card className="bg-gradient-card shadow-subtle">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Alertas do Sistema</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {alerts.length === 0 ? (
          <div className="text-center py-8">
            <CheckCircle className="h-12 w-12 text-success mx-auto mb-2" />
            <p className="text-muted-foreground">Nenhum alerta ativo</p>
          </div>
        ) : (
          alerts.map((alert) => (
            <Alert key={alert.id} variant={getAlertVariant(alert.type)} className="transition-smooth">
              {getAlertIcon(alert.type)}
              <div className="flex-1">
                <AlertTitle className="flex items-center justify-between">
                  {alert.title}
                  <span className="text-xs text-muted-foreground font-normal">
                    {alert.timestamp}
                  </span>
                </AlertTitle>
                <AlertDescription className="mt-1">
                  {alert.description}
                </AlertDescription>
              </div>
            </Alert>
          ))
        )}
      </CardContent>
    </Card>
  );
}