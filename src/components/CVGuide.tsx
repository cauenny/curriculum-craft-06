import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, User, Target, Building, GraduationCap, Award, FileText } from "lucide-react";
import ifroLogo from "@/assets/ifro-logo.png";

interface CVGuideProps {
  onStartCreating: () => void;
}

export const CVGuide = ({ onStartCreating }: CVGuideProps) => {
  const guideSteps = [
    {
      icon: <User className="h-6 w-6 text-cv-primary" />,
      title: "Informações Pessoais",
      description: "Dados básicos e contato",
      tips: [
        "Use um email profissional (evite apelidos)",
        "Coloque um número de telefone que você sempre atende",
        "Inclua sua cidade e estado atual",
        "Mantenha as informações sempre atualizadas"
      ]
    },
    {
      icon: <Target className="h-6 w-6 text-cv-primary" />,
      title: "Objetivo Profissional",
      description: "Sua meta de carreira",
      tips: [
        "Seja específico sobre a área que deseja atuar",
        "Mencione seus principais pontos fortes",
        "Mantenha entre 2-3 linhas, seja direto",
        "Adapte o objetivo para cada vaga que aplicar"
      ]
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-cv-primary" />,
      title: "Formação Acadêmica",
      description: "Sua educação e qualificação",
      tips: [
        "Coloque a formação mais recente primeiro",
        "Inclua o nome completo da instituição",
        "Mencione cursos técnicos relevantes",
        "Se ainda está estudando, coloque 'Em andamento'"
      ]
    },
    {
      icon: <Building className="h-6 w-6 text-cv-primary" />,
      title: "Experiência Profissional",
      description: "Seu histórico de trabalho",
      tips: [
        "Liste da experiência mais recente para a mais antiga",
        "Inclua nome da empresa, cargo e período",
        "Foque nas responsabilidades e conquistas",
        "Use verbos de ação (desenvolvi, gerenciei, coordenei)"
      ]
    },
    {
      icon: <Award className="h-6 w-6 text-cv-primary" />,
      title: "Habilidades e Competências",
      description: "Suas principais qualidades",
      tips: [
        "Misture habilidades técnicas e comportamentais",
        "Seja honesto sobre seu nível de conhecimento",
        "Inclua idiomas e nível de fluência",
        "Mencione softwares e ferramentas que domina"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-secondary py-8 relative">
      {/* Logo IFRO no canto superior esquerdo */}
      <div className="absolute top-4 left-4 z-10">
        <img 
          src={ifroLogo} 
          alt="IFRO Logo" 
          className="h-12 w-auto opacity-90"
        />
      </div>
      
      {/* Logo IFRO transparente no fundo */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0">
        <img 
          src={ifroLogo} 
          alt="IFRO Background" 
          className="w-96 h-auto opacity-5"
        />
      </div>
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-cv-text mb-4">
            Como Fazer um Currículo Profissional
          </h1>
          <p className="text-lg text-cv-muted max-w-2xl mx-auto">
            Siga este guia completo para criar um currículo que se destaque no mercado de trabalho
          </p>
        </div>

        <div className="space-y-6 mb-12">
          {guideSteps.map((step, index) => (
            <Card key={index} className="bg-gradient-card shadow-card border-0">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-cv-text">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-cv-primary/10">
                    {step.icon}
                  </div>
                  <div>
                    <span className="text-sm text-cv-primary font-medium">Passo {index + 1}</span>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-cv-muted text-sm">{step.description}</p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {step.tips.map((tip, tipIndex) => (
                    <div key={tipIndex} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-cv-primary mt-0.5 flex-shrink-0" />
                      <p className="text-cv-text">{tip}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-card shadow-card border-0 mb-8">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-3 text-cv-text">
              <FileText className="h-6 w-6 text-cv-primary" />
              Dicas Gerais Importantes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-cv-primary mt-0.5 flex-shrink-0" />
                  <p className="text-cv-text">Mantenha o currículo em no máximo 2 páginas</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-cv-primary mt-0.5 flex-shrink-0" />
                  <p className="text-cv-text">Use uma linguagem clara e objetiva</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-cv-primary mt-0.5 flex-shrink-0" />
                  <p className="text-cv-text">Revise sempre a ortografia e gramática</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-cv-primary mt-0.5 flex-shrink-0" />
                  <p className="text-cv-text">Adapte o currículo para cada vaga</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-cv-primary mt-0.5 flex-shrink-0" />
                  <p className="text-cv-text">Use um design limpo e profissional</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-cv-primary mt-0.5 flex-shrink-0" />
                  <p className="text-cv-text">Seja honesto sobre suas experiências</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button 
            onClick={onStartCreating}
            className="bg-gradient-primary text-white shadow-elegant hover:opacity-90 transition-all duration-300 py-6 px-12 text-lg font-semibold"
            size="lg"
          >
            Agora Vou Criar Meu Currículo
          </Button>
        </div>
      </div>
    </div>
  );
};