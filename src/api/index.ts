import { Router } from 'express';

import Article from './routes/article.routes';
import Comment from './routes/comment.routes';

const router = Router();

Article(router);
Comment(router);

export default () => {
  return router;
};
