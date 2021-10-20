import { NextFunction, Response, Router } from 'express';
import { body, validationResult } from 'express-validator';
import commentService from '../../services/comment.service';

const createCommentOnComment = async (req: any, res: Response, next: NextFunction) => {
  try {
    const created = await commentService.createCommentOnComment(req.body, req.params.articleId, req.params.commentId);
    return res.status(200).json(created);
  } catch (error) {
    return next(error);
  }
};

const createComment = async (req: any, res: Response, next: NextFunction) => {
  try {
    const created = await commentService.createComment(req.body, req.params.articleId);
    return res.status(200).json(created);
  } catch (error) {
    return next(error);
  }
};

const getArticalsComments = async (req: any, res: Response, next: NextFunction) => {
  try {
    const created = await commentService.getCommentsByArticle(req.params.articleId);
    return res.status(200).json(created);
  } catch (error) {
    return next(error);
  }
};

export default (app: Router) => {
  app.post('/article/:articleId/comment/:commentId/comment', body('nickName').isString(), body('content').isString(), createCommentOnComment);
  app.post('/article/:articleId/comment', body('nickName').isString(), body('content').isString(), createComment);
  app.get('/article/:articleId/comment', getArticalsComments);
};
