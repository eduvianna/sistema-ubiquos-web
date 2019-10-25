import Sequelize, { Model } from 'sequelize';

class SensorProject extends Model {
  static init(sequelize) {
    super.init(
      {
        sensor_id: Sequelize.INTEGER,
        project_id: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(model) {
    this.belongsTo(model.Sensor, { foreignKey: 'sensor_id' });
    this.belongsTo(model.Project, { foreignKey: 'project_id' });
  }
}

export default SensorProject;
