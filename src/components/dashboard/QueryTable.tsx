import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, AlertCircle, Clock } from "lucide-react";

interface QueryData {
  id: string;
  query: string;
  timestamp: string;
  latency: number;
  accuracy: number;
  status: 'success' | 'error' | 'warning';
  documentsRetrieved: number;
}

interface QueryTableProps {
  data: QueryData[];
}

export function QueryTable({ data }: QueryTableProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="h-4 w-4 text-success" />;
      case 'error':
        return <XCircle className="h-4 w-4 text-destructive" />;
      case 'warning':
        return <AlertCircle className="h-4 w-4 text-warning" />;
      default:
        return <Clock className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'success':
        return <Badge variant="secondary" className="bg-success/10 text-success border-success/20">Sucesso</Badge>;
      case 'error':
        return <Badge variant="destructive">Erro</Badge>;
      case 'warning':
        return <Badge variant="secondary" className="bg-warning/10 text-warning border-warning/20">Aviso</Badge>;
      default:
        return <Badge variant="outline">Pendente</Badge>;
    }
  };

  const getAccuracyColor = (accuracy: number) => {
    if (accuracy >= 90) return 'text-success';
    if (accuracy >= 70) return 'text-warning';
    return 'text-destructive';
  };

  return (
    <Card className="bg-gradient-card shadow-subtle">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Consultas Recentes</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-2 font-medium text-muted-foreground">Status</th>
                <th className="text-left py-3 px-2 font-medium text-muted-foreground">Consulta</th>
                <th className="text-left py-3 px-2 font-medium text-muted-foreground">Timestamp</th>
                <th className="text-left py-3 px-2 font-medium text-muted-foreground">Latência</th>
                <th className="text-left py-3 px-2 font-medium text-muted-foreground">Precisão</th>
                <th className="text-left py-3 px-2 font-medium text-muted-foreground">Docs</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.id} className="border-b border-border/50 hover:bg-muted/30 transition-smooth">
                  <td className="py-3 px-2">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(row.status)}
                      {getStatusBadge(row.status)}
                    </div>
                  </td>
                  <td className="py-3 px-2">
                    <div className="max-w-xs truncate font-medium">
                      {row.query}
                    </div>
                  </td>
                  <td className="py-3 px-2 text-sm text-muted-foreground">
                    {row.timestamp}
                  </td>
                  <td className="py-3 px-2">
                    <span className={row.latency > 2000 ? 'text-destructive' : row.latency > 1000 ? 'text-warning' : 'text-success'}>
                      {row.latency}ms
                    </span>
                  </td>
                  <td className="py-3 px-2">
                    <span className={`font-medium ${getAccuracyColor(row.accuracy)}`}>
                      {row.accuracy}%
                    </span>
                  </td>
                  <td className="py-3 px-2 text-muted-foreground">
                    {row.documentsRetrieved}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}