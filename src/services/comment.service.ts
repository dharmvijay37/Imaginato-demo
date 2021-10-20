import Sequelize from 'sequelize';
import { IComment } from '../types/comment';
import { IQuery } from '../types/query';
import db from '../db';

const createCommentOnComment = (comment: IComment, articleId: number, commentId: number) => {
  const commentBody: IComment = comment;
  commentBody.articleId = articleId;
  commentBody.parentCommentId = commentId;
  return db.Comment.create(commentBody)
    .then(() => {
      return { success: true };
    })
    .catch((error: Error) => {
      throw error;
    });
};

const createComment = (comment: IComment, articleId: number) => {
  const commentBody: IComment = comment;
  commentBody.articleId = articleId;
  return db.Comment.create(commentBody)
    .then(() => {
      return { success: true };
    })
    .catch((error: Error) => {
      throw error;
    });
};

const getCommentsByArticle = (articleId: number) => {
  return db.Comment.findAll({ where: { articleId } })
    .then(comment => comment)
    .catch((error: Error) => {
      throw error;
    });
};

export default {
  createComment,
  createCommentOnComment,
  getCommentsByArticle
};
