export interface CVData {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  institution: string;
  degree: string;
  company: string;
  position: string;
  workPeriod: string;
  skills: string;
  objective: string;
  photo?: string;
}

export const initialCVData: CVData = {
  fullName: "",
  phone: "",
  email: "",
  address: "",
  institution: "",
  degree: "", 
  company: "",
  position: "",
  workPeriod: "",
  skills: "",
  objective: "",
  photo: ""
};