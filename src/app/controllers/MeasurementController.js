import * as Yup from 'yup';
import Measurement from '../models/Measurement';

class MeasurementController {
  async index(req, res) {
    const { sensor } = req.query;
    const measurements = await Measurement.findAll({
      where: { sensor_id: sensor },
      attributes: ['value', 'created_at'],
      order: ['created_at'],
    });

    return res.json(measurements);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      sensor_id: Yup.number().required(),
      value: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Invalid informations' });
    }

    const { sensor_id, value } = await Measurement.create(req.body);

    return res.json({ sensor_id, value });
  }

  async update(req, res) {
    return res.json();
  }
}

export default new MeasurementController();
