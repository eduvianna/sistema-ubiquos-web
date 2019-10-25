import Sequelize from 'sequelize';

import databaseConfig from '../config/database';
import User from '../app/models/User';
import File from '../app/models/File';
import Project from '../app/models/Project';
import Sensor from '../app/models/Sensor';
import SensorProject from '../app/models/SensorProject';
import Measurement from '../app/models/Measurement';

const models = [User, File, Project, Sensor, SensorProject, Measurement];
class Database {
  constructor() {
    this.connection = new Sequelize(databaseConfig);

    this.init();
    this.associate();
  }

  init() {
    models.forEach(model => model.init(this.connection));
  }

  associate() {
    models.forEach(model => {
      if (model.associate) {
        model.associate(this.connection.models);
      }
    });
  }
}

export default new Database();
