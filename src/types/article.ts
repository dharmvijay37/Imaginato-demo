import { IBaseType } from './base';

interface IArticle extends IBaseType {
  nickName: string;
  title: string;
  content: string;
}

export { IArticle };
