import { IssueStatus } from '../interfaces/issue';

export const nextIssueStatus = (
  currentStatus: IssueStatus
): IssueStatus =>
  currentStatus === 'OPEN' ? 'PENDING' : 'CLOSED';
