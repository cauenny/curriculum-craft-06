import { CVData } from "@/types/cv";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, User, GraduationCap, Building, Target, Award } from "lucide-react";

interface CVPreviewProps {
  cvData: CVData;
}

export const CVPreview = ({ cvData }: CVPreviewProps) => {
  return (
    <div className="sticky top-6">
      <h2 className="text-xl font-semibold text-cv-text mb-4 flex items-center gap-2">
        <User className="h-5 w-5 text-cv-primary" />
        Prévia do Currículo
      </h2>
      
      <Card 
        id="cv-preview" 
        className="bg-white border-0 shadow-elegant min-h-[800px] p-8"
        style={{ width: '210mm', minHeight: '297mm', transform: 'scale(0.6)', transformOrigin: 'top left' }}
      >
        {/* Header */}
        <div className="border-b-2 border-cv-primary pb-6 mb-6">
          <div className="flex items-start gap-6">
            {/* Foto */}
            {cvData.photo && (
              <div className="flex-shrink-0">
                <img 
                  src={cvData.photo} 
                  alt="Foto Profissional" 
                  className="w-32 h-32 object-cover rounded-lg shadow-md border-2 border-cv-secondary"
                />
              </div>
            )}
            
            {/* Informações */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-cv-text mb-2">
                {cvData.fullName || "Seu Nome Completo"}
              </h1>
              <div className="flex flex-wrap gap-4 text-cv-muted">
                <div className="flex items-center gap-1">
                  <Phone className="h-4 w-4" />
                  <span>{cvData.phone || "(11) 99999-9999"}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Mail className="h-4 w-4" />
                  <span>{cvData.email || "seu.email@exemplo.com"}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{cvData.address || "Cidade, Estado"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Objetivo */}
        {cvData.objective && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-cv-primary mb-3 flex items-center gap-2">
              <Target className="h-5 w-5" />
              Objetivo Profissional
            </h2>
            <p className="text-cv-text leading-relaxed">{cvData.objective}</p>
          </div>
        )}

        {/* Formação */}
        {(cvData.institution || cvData.degree) && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-cv-primary mb-3 flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              Formação Acadêmica
            </h2>
            <div className="text-cv-text">
              <p className="font-medium">{cvData.degree || "Curso/Graduação"}</p>
              <p className="text-cv-muted">{cvData.institution || "Instituição de Ensino"}</p>
            </div>
          </div>
        )}

        {/* Experiência */}
        {(cvData.company || cvData.position) && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-cv-primary mb-3 flex items-center gap-2">
              <Building className="h-5 w-5" />
              Experiência Profissional
            </h2>
            <div className="text-cv-text">
              <p className="font-medium">{cvData.position || "Cargo/Função"}</p>
              <p className="text-cv-muted">{cvData.company || "Nome da Empresa"}</p>
              {cvData.workPeriod && (
                <p className="text-sm text-cv-muted mt-1">{cvData.workPeriod}</p>
              )}
            </div>
          </div>
        )}

        {/* Habilidades */}
        {cvData.skills && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-cv-primary mb-3 flex items-center gap-2">
              <Award className="h-5 w-5" />
              Habilidades e Competências
            </h2>
            <p className="text-cv-text leading-relaxed">{cvData.skills}</p>
          </div>
        )}
      </Card>
    </div>
  );
};