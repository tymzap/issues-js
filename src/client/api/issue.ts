import { Issue } from '../interfaces/issue';

// todo remove hardcoded user id after login implementation
const userId = 1;

export const readIssues = (): Promise<Issue[]> =>
  fetch(`${process.env.API_URL}/issues?userId=${userId}`)
    .then(response => response.json());

export const updateIssue = (
  issueId: number,
  data: Partial<Pick<Issue, 'name' | 'description' | 'status'>>
) =>
  fetch(`${process.env.API_URL}/issues/${issueId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

export const createIssue = (
  data: Pick<Issue, 'name' | 'description'>
) =>
  fetch(`${process.env.API_URL}/issues`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ...data,
      userId
    })
  });
