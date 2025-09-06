import { useState } from "react";
import { CVForm } from "./CVForm";
import { CVPreview } from "./CVPreview";
import { CVGuide } from "./CVGuide";
import { CVData, initialCVData } from "@/types/cv";
import { useToast } from "@/hooks/use-toast";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import ifroLogo from "@/assets/ifro-logo.png";

export const CVGenerator = () => {
  const [cvData, setCvData] = useState<CVData>(initialCVData);
  const [showGuide, setShowGuide] = useState(true);
  const { toast } = useToast();

  const updateCVData = (field: keyof CVData, value: string) => {
    setCvData(prev => ({ ...prev, [field]: value }));
  };

  const generatePDF = async () => {
    const element = document.getElementById('cv-preview');
    
    if (!element) {
      toast({
        title: "Erro",
        description: "Não foi possível encontrar a prévia do currículo",
        variant: "destructive"
      });
      return;
    }

    try {
      toast({
        title: "Gerando PDF...",
        description: "Por favor, aguarde enquanto seu currículo é gerado."
      });

      // Reset transform for proper PDF generation
      const originalTransform = element.style.transform;
      element.style.transform = 'none';
      
      const canvas = await html2canvas(element, {
        scale: 2,
        backgroundColor: '#ffffff',
        useCORS: true,
        allowTaint: true
      });

      // Restore original transform
      element.style.transform = originalTransform;

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(`curriculo-${cvData.fullName || 'nome'}.pdf`);
      
      toast({
        title: "Sucesso!",
        description: "Seu currículo foi gerado e baixado com sucesso."
      });
    } catch (error) {
      console.error('Erro ao gerar PDF:', error);
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao gerar o PDF. Tente novamente.",
        variant: "destructive"
      });
    }
  };

  const startCreating = () => {
    setShowGuide(false);
    // Scroll to top when switching to form
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (showGuide) {
    return <CVGuide onStartCreating={startCreating} />;
  }

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
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-cv-text mb-4">
            Gerador de Currículo Profissional
          </h1>
          <p className="text-lg text-cv-muted max-w-2xl mx-auto">
            Crie seu currículo de forma rápida e profissional. Preencha as informações abaixo e gere um PDF elegante.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <CVForm 
              cvData={cvData}
              onUpdate={updateCVData}
              onGeneratePDF={generatePDF}
            />
          </div>
          <div>
            <CVPreview cvData={cvData} />
          </div>
        </div>
      </div>
    </div>
  );
};