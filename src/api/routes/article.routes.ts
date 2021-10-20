import { NextFunction, Response, Router } from 'express';
import { body, validationResult } from 'express-validator';
import articleService from '../../services/article.service';

const getArticle = async (req: any, res: Response, next: NextFunction) => {
  try {
    const article = await articleService.getArticle(req.params.articleId);
    return res.status(200).json(article);
  } catch (error) {
    return next(error);
  }
};

const getArticles = async (req: any, res: Response, next: NextFunction) => {
  try {
    const { query } = req;
    const articles = await articleService.getArticles(query);
    return res.status(200).json({ articles });
  } catch (error) {
    return next(error);
  }
};

const createArticle = async (req: any, res: Response, next: NextFunction) => {
  try {
    const created = await articleService.createArticle(req.body);
    return res.status(200).json(created);
  } catch (error) {
    return next(error);
  }
};

export default (app: Router) => {
  app.post('/article', body('nickName').isString(), body('title').isString(), body('content').isString(), createArticle);
  app.get('/article/:articleId', getArticle);
  app.get('/articles', getArticles);
};
