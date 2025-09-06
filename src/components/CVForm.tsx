import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CVData } from "@/types/cv";
import { User, Phone, Mail, MapPin, GraduationCap, Building, Target, Camera } from "lucide-react";

interface CVFormProps {
  cvData: CVData;
  onUpdate: (field: keyof CVData, value: string) => void;
  onGeneratePDF: () => void;
}

export const CVForm = ({ cvData, onUpdate, onGeneratePDF }: CVFormProps) => {
  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        onUpdate("photo", result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-card shadow-card border-0">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-cv-text">
            <User className="h-5 w-5 text-cv-primary" />
            Informações Pessoais
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-cv-text font-medium">Nome Completo</Label>
              <Input
                id="fullName"
                placeholder="Digite seu nome completo"
                value={cvData.fullName}
                onChange={(e) => onUpdate("fullName", e.target.value)}
                className="shadow-input border-cv-secondary focus:ring-cv-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-cv-text font-medium">Telefone</Label>
              <Input
                id="phone"
                placeholder="(11) 99999-9999"
                value={cvData.phone}
                onChange={(e) => onUpdate("phone", e.target.value)}
                className="shadow-input border-cv-secondary focus:ring-cv-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-cv-text font-medium">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu.email@exemplo.com"
                value={cvData.email}
                onChange={(e) => onUpdate("email", e.target.value)}
                className="shadow-input border-cv-secondary focus:ring-cv-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address" className="text-cv-text font-medium">Endereço</Label>
              <Input
                id="address"
                placeholder="Cidade, Estado"
                value={cvData.address}
                onChange={(e) => onUpdate("address", e.target.value)}
                className="shadow-input border-cv-secondary focus:ring-cv-primary"
              />
            </div>
          </div>
          
          {/* Upload de Foto */}
          <div className="space-y-2">
            <Label htmlFor="photo" className="text-cv-text font-medium flex items-center gap-2">
              <Camera className="h-4 w-4 text-cv-primary" />
              Foto Profissional (Opcional)
            </Label>
            <Input
              id="photo"
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="shadow-input border-cv-secondary focus:ring-cv-primary"
            />
            {cvData.photo && (
              <div className="mt-2">
                <img 
                  src={cvData.photo} 
                  alt="Foto Preview" 
                  className="w-24 h-24 object-cover rounded-lg shadow-sm"
                />
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-card shadow-card border-0">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-cv-text">
            <GraduationCap className="h-5 w-5 text-cv-primary" />
            Formação Acadêmica
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="institution" className="text-cv-text font-medium">Instituição de Ensino</Label>
              <Input
                id="institution"
                placeholder="Nome da universidade/escola"
                value={cvData.institution}
                onChange={(e) => onUpdate("institution", e.target.value)}
                className="shadow-input border-cv-secondary focus:ring-cv-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="degree" className="text-cv-text font-medium">Curso/Graduação</Label>
              <Input
                id="degree"
                placeholder="Nome do curso"
                value={cvData.degree}
                onChange={(e) => onUpdate("degree", e.target.value)}
                className="shadow-input border-cv-secondary focus:ring-cv-primary"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-card shadow-card border-0">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-cv-text">
            <Building className="h-5 w-5 text-cv-primary" />
            Experiência Profissional
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company" className="text-cv-text font-medium">Empresa</Label>
              <Input
                id="company"
                placeholder="Nome da empresa"
                value={cvData.company}
                onChange={(e) => onUpdate("company", e.target.value)}
                className="shadow-input border-cv-secondary focus:ring-cv-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="position" className="text-cv-text font-medium">Cargo</Label>
              <Input
                id="position"
                placeholder="Seu cargo/função"
                value={cvData.position}
                onChange={(e) => onUpdate("position", e.target.value)}
                className="shadow-input border-cv-secondary focus:ring-cv-primary"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="workPeriod" className="text-cv-text font-medium">Período de Trabalho</Label>
            <Input
              id="workPeriod"
              placeholder="Jan 2020 - Atual"
              value={cvData.workPeriod}
              onChange={(e) => onUpdate("workPeriod", e.target.value)}
              className="shadow-input border-cv-secondary focus:ring-cv-primary"
            />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-card shadow-card border-0">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-cv-text">
            <Target className="h-5 w-5 text-cv-primary" />
            Informações Adicionais
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="objective" className="text-cv-text font-medium">Objetivo Profissional</Label>
            <Textarea
              id="objective"
              placeholder="Descreva seu objetivo profissional..."
              value={cvData.objective}
              onChange={(e) => onUpdate("objective", e.target.value)}
              className="shadow-input border-cv-secondary focus:ring-cv-primary min-h-[80px]"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="skills" className="text-cv-text font-medium">Habilidades e Competências</Label>
            <Textarea
              id="skills"
              placeholder="Liste suas principais habilidades..."
              value={cvData.skills}
              onChange={(e) => onUpdate("skills", e.target.value)}
              className="shadow-input border-cv-secondary focus:ring-cv-primary min-h-[80px]"
            />
          </div>
        </CardContent>
      </Card>

      <Button 
        onClick={onGeneratePDF}
        className="w-full bg-gradient-primary text-white shadow-elegant hover:opacity-90 transition-all duration-300 py-6 text-lg font-semibold"
        size="lg"
      >
        Gerar Currículo em PDF
      </Button>
    </div>
  );
};