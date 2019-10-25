import Sequelize, { Model } from 'sequelize';

class Measurement extends Model {
  static init(sequelize) {
    super.init(
      {
        sensor_id: Sequelize.INTEGER,
        value: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(model) {
    this.hasMany(model.Sensor, { foreignKey: 'sensor_id' });
  }
}

export default Measurement;
