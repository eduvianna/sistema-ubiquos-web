import Sequelize, { Model } from 'sequelize';

class Sensor extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        description: Sequelize.STRING,
        type: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(model) {
    this.belongsToMany(model.Project, {
      through: 'sensors-project',
      foreignKey: 'sensor_id',
      as: 'sensors',
    });
  }
}

export default Sensor;
