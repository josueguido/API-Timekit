import { TIMEKIT_PROJECT_ID } from '../config.js';

export const proyectos = {
  [TIMEKIT_PROJECT_ID]: {
    timezone: 'America/Costa_Rica',
  },
};

export function obtenerDetallesDeProyecto(projectId) {
  return proyectos[projectId] || null;
}
