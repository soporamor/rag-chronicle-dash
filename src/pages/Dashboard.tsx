import { MetricCard } from "@/components/dashboard/MetricCard";
import { PerformanceChart } from "@/components/dashboard/PerformanceChart";
import { QueryTable } from "@/components/dashboard/QueryTable";
import { AlertPanel } from "@/components/dashboard/AlertPanel";
import { Activity, Clock, Target, Zap } from "lucide-react";

// Dados mockados para demonstração
const chartData = [
  { timestamp: '09:00', accuracy: 85, latency: 1200, relevance: 88 },
  { timestamp: '10:00', accuracy: 87, latency: 1100, relevance: 90 },
  { timestamp: '11:00', accuracy: 91, latency: 980, relevance: 93 },
  { timestamp: '12:00', accuracy: 89, latency: 1050, relevance: 87 },
  { timestamp: '13:00', accuracy: 93, latency: 890, relevance: 95 },
  { timestamp: '14:00', accuracy: 88, latency: 1150, relevance: 89 },
  { timestamp: '15:00', accuracy: 92, latency: 920, relevance: 94 },
];

const queryData = [
  {
    id: '1',
    query: 'Como configurar autenticação JWT em Node.js?',
    timestamp: '15:30',
    latency: 850,
    accuracy: 94,
    status: 'success' as const,
    documentsRetrieved: 5
  },
  {
    id: '2',
    query: 'Melhores práticas para React components',
    timestamp: '15:25',
    latency: 1200,
    accuracy: 87,
    status: 'success' as const,
    documentsRetrieved: 8
  },
  {
    id: '3',
    query: 'Error handling em APIs GraphQL',
    timestamp: '15:20',
    latency: 2100,
    accuracy: 65,
    status: 'warning' as const,
    documentsRetrieved: 3
  },
  {
    id: '4',
    query: 'Docker containerization strategies',
    timestamp: '15:15',
    latency: 950,
    accuracy: 91,
    status: 'success' as const,
    documentsRetrieved: 6
  },
];

const alertData = [
  {
    id: '1',
    type: 'warning' as const,
    title: 'Alta Latência Detectada',
    description: 'Latência média superior a 2s nas últimas consultas de GraphQL',
    timestamp: '15:20'
  },
  {
    id: '2',
    type: 'info' as const,
    title: 'Atualização de Base de Conhecimento',
    description: 'Nova documentação do React 18 foi indexada com sucesso',
    timestamp: '14:45'
  }
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          RAG Chronicle Dashboard
        </h1>
        <p className="text-lg text-muted-foreground">
          Monitoramento em tempo real da performance do sistema RAG
        </p>
      </div>

      {/* Métricas Principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Precisão Média"
          value="91.2%"
          change={5.2}
          changeLabel="últimas 24h"
          icon={<Target className="h-5 w-5" />}
          variant="success"
        />
        <MetricCard
          title="Latência Média"
          value="1.1s"
          change={-12.5}
          changeLabel="últimas 24h"
          icon={<Clock className="h-5 w-5" />}
          variant="success"
        />
        <MetricCard
          title="Consultas/Hora"
          value="847"
          change={18.7}
          changeLabel="vs ontem"
          icon={<Activity className="h-5 w-5" />}
          variant="default"
        />
        <MetricCard
          title="Taxa de Sucesso"
          value="97.8%"
          change={2.1}
          changeLabel="últimas 24h"
          icon={<Zap className="h-5 w-5" />}
          variant="success"
        />
      </div>

      {/* Gráficos de Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <PerformanceChart
          data={chartData}
          title="Precisão (%)"
          metric="accuracy"
        />
        <PerformanceChart
          data={chartData}
          title="Latência (ms)"
          metric="latency"
        />
        <PerformanceChart
          data={chartData}
          title="Relevância (%)"
          metric="relevance"
        />
      </div>

      {/* Tabela de Consultas e Alertas */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <QueryTable data={queryData} />
        </div>
        <div>
          <AlertPanel alerts={alertData} />
        </div>
      </div>

      {/* Rodapé */}
      <div className="text-center py-4 border-t border-border">
        <p className="text-sm text-muted-foreground">
          Última atualização: {new Date().toLocaleTimeString('pt-BR')}
        </p>
      </div>
    </div>
  );
};

export default Dashboard;