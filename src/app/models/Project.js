import Sequelize, { Model } from 'sequelize';

class Project extends Model {
  static init(sequelize) {
    super.init(
      {
        user_id: Sequelize.INTEGER,
        name: Sequelize.STRING,
        description: Sequelize.STRING,
        host: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'projects',
      }
    );

    return this;
  }

  static associate(model) {
    this.belongsTo(model.File, { foreignKey: 'user_id', as: 'user' });
    this.belongsToMany(model.Sensor, {
      through: 'sensors-project',
      foreignKey: 'project_id',
      as: 'projects',
    });
  }
}

export default Project;
