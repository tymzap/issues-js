import { Router } from 'express';

import issuesController from '../controllers/issues';

const issuesRouter = Router();

issuesRouter.get(
  '/:userId',
  async (request, response) => {
    const userId = parseInt(request.params.userId);
    response.json(await issuesController.readIssues(userId));
  }
);

issuesRouter.post(
  '/',
  async (request, response) => {
    response.json(await issuesController.createIssue(request.body));
  }
);

issuesRouter.put(
  '/:issueId',
  async (request, response) => {
    const issueId = parseInt(request.params.issueId);
    response.json(await issuesController.updateIssue(issueId, request.body));
  }
);

export default issuesRouter;
