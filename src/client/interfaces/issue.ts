export type IssueStatus = 'OPEN' | 'PENDING' | 'CLOSED';

export type Issue = {
  id: number;
  name: string;
  description: string;
  status: IssueStatus;
  userId: number;
  createdAt: Date,
  updatedAt: Date;
};
