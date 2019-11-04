import * as Yup from 'yup';

import Sensor from '../models/Sensor';

class SensorController {
  async store(req, res) {
    const schema = Yup.object().shape({
      project_id: Yup.number().required(),
      name: Yup.string().required(),
      description: Yup.string().required(),
      type: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Invalid informations' });
    }

    const { name, description, type } = await Sensor.create(req.body);

    return res.json({ name, description, type });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      project_id: Yup.number().required(),
      sensor_id: Yup.number().required(),
      name: Yup.string(),
      description: Yup.string(),
      type: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Invalid informations' });
    }

    const sensor = await Sensor.findOne({
      where: { id: req.body.sensor_id, project_id: req.body.project_id },
    });

    if (!sensor) {
      return res.status(401).json({ error: 'Sensor not found' });
    }

    const { name, description, type } = req.body;
    const sensor_update = await sensor.update({ name, description, type });

    return res.json({
      name: sensor_update.name,
      description: sensor_update.description,
      type: sensor_update.type,
    });
  }
}

export default new SensorController();
