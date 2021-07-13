export class sendReportModel{
  id: number = 0;
  date: string = '';
  domainName: string = '';
  sourceIP: string = '';
  destinationIP: string = '';
  typeOffense: string = '';
  content: string = '';
  note: string = '';
  oldReport: boolean | undefined;
  newReport: boolean | undefined;
}
