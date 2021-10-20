import Sequelize from 'sequelize';
import { IArticle } from '../types/article';
import { IQuery } from '../types/query';
import db from '../db';

const getPagination = (perPage: number, page: number, total: number) => {
  return {
    total: +total,
    perPage: +perPage,
    currentPage: +page,
    totalPages: total === 0 ? 0 : Math.ceil(total / +perPage)
  };
};
const getArticles = (queryData: any) => {
  const page = queryData.page || 1;
  const { perPage } = queryData;
  const sortField = queryData.sortField || 'createdAt';
  const sortDirection = queryData.sortDirection || 'DESC';

  const query: IQuery = {};
  const includeComment: any = {
    model: db.Comment,
    as: 'comment'
  };
  query.include = [includeComment];
  query.order = [[sortField, sortDirection]];
  if (perPage) {
    query.limit = +perPage;
    query.offset = (page - 1) * +perPage;
  }

  return db.Article.findAndCountAll(query)
    .then(articles => {
      return {
        articles: articles.rows,
        pagination: getPagination(perPage, page, articles.count)
      };
    })
    .catch((error: Error) => {
      throw error;
    });
};

const createArticle = (article: IArticle) => {
  return db.Article.create(article)
    .then(() => {
      return { success: true };
    })
    .catch((error: Error) => {
      throw error;
    });
};

const getArticle = (articleId: number) => {
  return db.Article.findByPk(articleId)
    .then(articles => articles)
    .catch((error: Error) => {
      throw error;
    });
};

export default {
  getArticles,
  getArticle,
  createArticle
};
