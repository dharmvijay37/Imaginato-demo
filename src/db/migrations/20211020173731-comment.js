module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('comment', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      nickName: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      articleId: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false
      },
      parentCommentId: {
        field: 'commentId',
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false
      }
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('comment');
  }
};