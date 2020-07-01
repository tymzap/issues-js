import { Router } from 'express';

import issuesController from '../controllers/issues';

const issuesRouter = Router();

issuesRouter.get(
  '/',
  async (request, response) => {
    // todo implement validation schemas for endpoint queries
    const userId = parseInt(request.query.userId as string);
    response.json(await issuesController.readIssues(userId));
  }
);

issuesRouter.post(
  '/',
  async (request, response) => {
    // todo implement proper response handling
    response.json(await issuesController.createIssue(request.body));
  }
);

issuesRouter.put(
  '/:issueId',
  async (request, response) => {
    const issueId = parseInt(request.params.issueId);
    if (await issuesController.updateIssue(issueId, request.body)) {
      response.status(204).end();
    } else {
      response.status(400);
    }
  }
);

export default issuesRouter;
