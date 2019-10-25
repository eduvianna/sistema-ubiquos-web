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
      }
    );

    return this;
  }

  static associate(model) {
    this.belongsTo(model.File, { foreignKey: 'user_id', as: 'user' });
    this.belongsToMany(model.Sensors, {
      through: 'sensors-project',
      foreignKey: 'project_id',
      as: 'projects',
    });
  }
}

export default Project;
