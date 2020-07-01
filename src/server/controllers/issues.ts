import Issue from '../database/models/issue';

export const createIssue = async (
  data: Pick<Issue, 'name' | 'description' | 'userId'>
) =>
  // todo add validation schema for create endpoints
  Issue.create({
    ...data,
    status: 'OPEN'
  });

export const readIssues = async (userId: number) =>
  // todo protect routes by JWT
  Issue.findAll({
    where: {
      userId
    }
  });

export const updateIssue = async (
  issueId: number,
  data: Partial<Pick<Issue, 'name' | 'description' | 'status'>>
) =>
  // todo add validation schema for update endpoints
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
