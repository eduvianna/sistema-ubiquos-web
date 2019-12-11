import * as Yup from 'yup';
import Project from '../models/Project';
import Sensor from '../models/Sensor';

class ProjectController {
  async index(req, res) {
    const projects = await Project.findAll({
      where: { user_id: req.userId },
      attributes: ['id', 'name', 'description', 'host', 'created_at'],
      order: ['created_at'],
      include: [
        {
          model: Sensor,
          as: 'sensors',
          attributes: ['id', 'name', 'description', 'type'],
        },
      ],
    });
    return res.json(projects);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      description: Yup.string().required(),
      host: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Invalid informations' });
    }

    const { name, description, host } = req.body;
    const user_id = req.userId;

    const projectExists = await Project.findOne({
      where: { user_id, name },
    });

    if (projectExists) {
      return res
        .status(401)
        .json({ error: 'You already have a project with that name' });
    }

    const project = await Project.create({
      name,
      description,
      host,
      user_id,
    });

    return res.json(project);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      project_id: Yup.number().required(),
      name: Yup.string(),
      description: Yup.string(),
      host: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Invalid informations' });
    }

    const projectExists = await Project.findOne({
      where: { id: req.userId, name: req.body.name },
    });

    if (projectExists) {
      return res
        .status(401)
        .json({ error: 'You already have a project with that name' });
    }
    const project = await Project.findOne({
      where: { id: req.body.project_id },
    });

    if (!project) {
      return res.status(401).json({ error: 'Project not found' });
    }

    const { name, description, host } = await project.update(req.body);
    return res.json({ name, description, host });
  }
}

export default new ProjectController();
