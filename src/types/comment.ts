import { IBaseType } from './base';

interface IComment extends IBaseType {
  nickName: string;
  articleId: number;
  commentId?: number;
  parentCommentId?: number;
  content: string;
}

export { IComment };
