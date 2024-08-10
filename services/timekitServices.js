import fetch from 'node-fetch';
import { TIMEKIT_API_KEY } from '../config.js';
console.log('TIMEKIT_API_KEY:', process.env.TIMEKIT_API_KEY);

export async function actualizarHorarioEspecifico(projectId, availabilityConstraints) {
  const url = `https://api.timekit.io/v2/projects/${projectId}`;
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Basic ${TIMEKIT_API_KEY}`,
  };

  const requestBody = JSON.stringify({ availability_constraints: availabilityConstraints });
  console.log('Request Body:', requestBody);

  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers,
      body: requestBody,
    });

    const responseData = await response.text();
    console.log('Response Data:', responseData);

    if (response.status === 204) {
      return { message: 'Disponibilidad actualizada correctamente' };
    } else {
      throw new Error(`Código de estado ${response.status}, Respuesta: ${responseData}`);
    }
  } catch (error) {
    throw new Error(`Error al actualizar disponibilidad: ${error.message}`);
  }
}
