import * as Yup from 'yup';
import Project from '../models/Project';

class ProjectController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      description: Yup.string().required(),
      host: Yup.string().required(),
    });
    return res.json();
  }
}

export default new ProjectController();
