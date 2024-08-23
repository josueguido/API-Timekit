import { actualizarHorarioEspecifico } from '../services/timekitServices.js';

export async function updateProjectAvailability(req, res) {
  console.log('Request Body:', req.body);

  const { availability_constraints } = req.body;
  const projectId = process.env.TIMEKIT_PROJECT_ID;

  if (!projectId || !availability_constraints || !Array.isArray(availability_constraints)) {
    console.log('Faltan parámetros requeridos o formato incorrecto');
    return res.status(400).json({ error: 'Faltan parámetros requeridos o formato incorrecto' });
  }

  try {
    const result = await actualizarHorarioEspecifico(projectId, availability_constraints);
    res.status(200).json({ message: result.message });
  } catch (error) {
    console.error('Error en la actualización:', error.message);
    res.status(500).json({ error: error.message });
  }
}
