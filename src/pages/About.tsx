import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Nossa História de Amor e Cuidado
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A Associação Projeto Só Por Amor surgiu da iniciativa de um grupo de voluntários que, 
              por muitos anos, atuava de forma solidária. Em 23 de junho de 2018, decidiram oficializar 
              sua atuação, fundando a Associação para ampliar e estruturar o impacto social.
            </p>
          </div>

          {/* Missão e Visão */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-gradient-success text-success-foreground">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Nossa Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-lg">
                  Fortalecer o desenvolvimento holístico de indivíduos em situação de vulnerabilidade 
                  por meio de abordagens solidárias e práticas inclusivas.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-primary text-primary-foreground">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Nossa Visão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-lg">
                  Ser referência em acolhimento e transformação social em nossa comunidade, 
                  construindo um futuro mais justo e solidário para todos.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Informações Legais */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">Documentação Legal</h2>
            <p className="text-muted-foreground mb-8">
              Somos uma associação oficialmente constituída e registrada, com total transparência 
              em nossa atuação.
            </p>
            <Button asChild>
              <a 
                href="https://drive.google.com/file/d/1s4DhHc5vUsbdhpL-l7Ewhp1WVbxFUWZN/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Download da ATA e Estatuto
              </a>
            </Button>
          </div>

          {/* Liderança */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">Nossa Liderança</h2>
            <Card className="max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-xl">Ozélia Muniz</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Presidente da Associação</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;