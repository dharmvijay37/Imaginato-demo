import { Model, DataTypes, Sequelize } from 'sequelize';
import { sequelize } from './index';

export class Comment extends Model {
  public id!: number;

  public nickName!: string;

  public title!: string;

  public content!: string;

  // timestamps!
  public readonly createdAt!: Date;
}

Comment.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED
    },
    nickName: {
      type: DataTypes.STRING
    },
    content: {
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: Sequelize.fn('now')
    },
    articleId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    parentCommentId: {
      field: 'commentId',
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    }
  },
  {
    sequelize,
    tableName: 'Comment',
    timestamps: false
  }
);
