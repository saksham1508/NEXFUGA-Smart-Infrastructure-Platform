export interface SolutionCard {
  id: string;
  title: string;
  category: 'Energy' | 'Security' | 'Automation' | 'Networking';
  description: string;
  iconName: string;
  features: string[];
}

export interface ConsultationFormData {
  fullName: string;
  email: string;
  companyName: string;
  phone: string;
  serviceInterest: 'Solar' | 'CCTV & Security' | 'Building Automation' | 'Enterprise IT' | 'Consulting';
  message: string;
}