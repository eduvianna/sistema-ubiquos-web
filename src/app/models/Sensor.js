import Sequelize, { Model } from 'sequelize';

class Sensor extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        description: Sequelize.STRING,
        type: Sequelize.STRING,
        project_id: Sequelize.INTEGER,
      },
      {
        sequelize,
        tableName: 'sensors',
      }
    );

    return this;
  }

  static associate(model) {
    this.belongsTo(model.Project, { foreignKey: 'project_id', as: 'projects' });
  }
}

export default Sensor;
