import Issue from '../database/models/issue';

export const createIssue = async (
  data: Pick<Issue, 'name' | 'description' | 'userId'>
) =>
  Issue.create({
    ...data,
    status: 'OPEN'
  });

export const readIssues = async (userId: number) =>
  Issue.findAll({
    where: {
      userId
    }
  });

export const updateIssue = async (
  issueId: number,
  data: Partial<Pick<Issue, 'name' | 'description' | 'status'>>
) =>
  !!Issue.update(data, {
    where: {
      id: issueId
    }
  });

export default {
  createIssue,
  readIssues,
  updateIssue
};
