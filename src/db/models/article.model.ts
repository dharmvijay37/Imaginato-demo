import { Model, DataTypes, Sequelize } from 'sequelize';
import { Comment } from './comment.model';
import { sequelize } from './index';

export class Article extends Model {
  public id!: number;

  public nickName!: string;

  public title!: string;

  public content!: string;

  // timestamps!
  public readonly createdAt!: Date;
}

Article.init(
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
    title: {
      type: DataTypes.STRING
    },
    content: {
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: Sequelize.fn('now')
    }
  },
  {
    sequelize,
    tableName: 'Article',
    timestamps: false
  }
);

Article.hasMany(Comment, {
  sourceKey: 'id',
  foreignKey: 'articleId',
  as: 'comment'
});
