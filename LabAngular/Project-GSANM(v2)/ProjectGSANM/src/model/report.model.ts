export interface Report{
  date: number;
  access: number;
  application: number;
  authentication: number;
  dos: number;
  Exploit: number;
  Malware: number;
  policy: number;
  potentialExploit: number;
  recon: number;
  risk: number;
  suspiciousActivity: number;
  system: number;
}
export class NameDomain{
  id: number;
  nameDomain: string;
  status: boolean;
}
