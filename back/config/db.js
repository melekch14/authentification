const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('testapp', 'melek', '1234', {
  host: 'localhost',
  dialect: 'postgres'
});

sequelize.sync({ force: false })
  .then(() => {
    console.log('Database and tables synced successfully');
  })
  .catch(err => {
    console.error('Error syncing database:', err);
  });

module.exports = sequelize;
