import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GraduationCap, Home, Utensils, Heart } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Educação para Todos",
      description: "Oferecemos reforço escolar e cursos profissionalizantes para crianças e jovens da comunidade.",
      icon: GraduationCap,
      color: "text-success"
    },
    {
      title: "Moradia Digna",
      description: "Ajudamos famílias em situação de vulnerabilidade a conquistar uma moradia adequada.",
      icon: Home,
      color: "text-primary"
    },
    {
      title: "Alimentação Solidária",
      description: "Distribuímos cestas básicas e oferecemos refeições gratuitas para famílias necessitadas.",
      icon: Utensils,
      color: "text-warning"
    },
    {
      title: "Cuidado e Saúde",
      description: "Promovemos campanhas de saúde e oferecemos apoio psicológico para a comunidade.",
      icon: Heart,
      color: "text-destructive"
    }
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Projetos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada projeto é desenvolvido com muito amor e dedicação, visando impactar 
            positivamente a vida das pessoas em nossa comunidade.
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