import jwt from 'jsonwebtoken';
import * as Yup from 'yup';

import authConfig from '../../config/auth';
import User from '../models/User';

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .min(6)
        .required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Informations not valid' });
    }

    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (!userExists) {
      return res.status(401).json();
    }
    return res.json();
  }
}

export default new SessionController();
