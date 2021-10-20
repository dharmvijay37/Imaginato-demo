const currentDate = new Date();
currentDate.toISOString();

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('Comment', [
      {
        id: 1,
        createdAt: currentDate,
        nickName: 'Jonh',
        articleId: 1,
        content: 'Good'
      },
      {
        id: 2,
        createdAt: currentDate,
        nickName: 'Sam',
        articleId: 1,
        content: 'Nice article'
      },
      {
        id: 3,
        createdAt: currentDate,
        nickName: 'Jay',
        articleId: 2,
        content: 'Very nice article'
      },
      {
        id: 4,
        createdAt: currentDate,
        nickName: 'Rakesh',
        articleId: 2,
        content: 'Nice article'
      }
    ]);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('Comment', [
      {
        id: 1
      },
      {
        id: 2
      },
      {
        id: 3
      },
      {
        id: 4
      }
    ]);
  }
};