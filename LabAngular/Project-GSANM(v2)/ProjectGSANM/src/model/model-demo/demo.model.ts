export class ReportModel{
  id: number;
  date: string;
  domainName: string;
  sourceIP: string;
  destinationIP: string;
  typeOffense: string;
  content: string;
  note: string;
  offenseNew: boolean;
  offenseOld: boolean;
}
export class DomainNameModel{
  id: number;
  nameDomain: string;
  status: boolean;
}
