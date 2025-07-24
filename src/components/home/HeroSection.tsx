import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Users, Hand } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-primary text-primary-foreground py-20 overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transformando Vidas
            <span className="block text-primary-glow">Só Por Amor</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
            Uma associação dedicada a levar esperança, cuidado e solidariedade 
            para quem mais precisa em nossa comunidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/ajudar">Como Ajudar</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <Link to="/sobre">Conheça Nossa História</Link>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="bg-white/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Heart className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-2">500+</h3>
            <p className="text-primary-foreground/80">Vidas Transformadas</p>
          </div>
          <div className="text-center">
            <div className="bg-white/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Users className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-2">150+</h3>
            <p className="text-primary-foreground/80">Voluntários Ativos</p>
          </div>
          <div className="text-center">
            <div className="bg-white/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Hand className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-2">25+</h3>
            <p className="text-primary-foreground/80">Projetos Realizados</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;