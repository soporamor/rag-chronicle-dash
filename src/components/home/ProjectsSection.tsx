import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GraduationCap, Home, Utensils, Heart } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Apoio Educacional",
      description: "Oferecemos reforço escolar e oficinas de leitura para despertar o amor pelo conhecimento.",
      icon: GraduationCap,
      color: "text-success"
    },
    {
      title: "Cozinha Solidária",
      description: "Distribuímos refeições e cestas básicas para famílias em insegurança alimentar.",
      icon: Utensils,
      color: "text-warning"
    },
    {
      title: "Arte, Cultura e Esporte",
      description: "Aulas de música, teatro e esportes para desenvolver talentos e a socialização.",
      icon: Heart,
      color: "text-destructive"
    },
    {
      title: "Cursos para Mulheres",
      description: "Oferecemos cursos profissionalizantes para mulheres, promovendo autonomia e geração de renda.",
      icon: Home,
      color: "text-primary"
    }
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Onde nosso amor se torna ação
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada projeto é desenvolvido com muito amor e dedicação, visando o desenvolvimento 
            holístico de indivíduos em situação de vulnerabilidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-medium transition-all duration-300 bg-gradient-card border-border/50">
              <CardHeader className="text-center">
                <div className="bg-background rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-subtle">
                  <project.icon className={`h-8 w-8 ${project.color}`} />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  {project.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link to="/projetos">Conheça Todos os Projetos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;