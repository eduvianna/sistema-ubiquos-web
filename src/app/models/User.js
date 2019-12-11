import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING,
        password_unhash: Sequelize.VIRTUAL,
        avatar_id: Sequelize.INTEGER,
      },
      {
        sequelize,
      },
    );

    this.addHook('beforeSave', async (user) => {
      if (user.password_unhash) {
        user.password = await bcrypt.hash(user.password_unhash, 8);
      }
    });

    return this;
  }

  static associate(model) {
    this.belongsTo(model.File, { foreignKey: 'avatar_id', as: 'avatar' });
    this.hasMany(model.Project, { as: 'projects' });
  }

  checkPassowrd(password) {
    return bcrypt.compare(password, this.password);
  }
}

export default User;
