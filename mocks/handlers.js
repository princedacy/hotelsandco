// src/mocks/handlers.js
import { rest } from 'msw'

export const handlers = [
  // Handles a GET /rooms request
  rest.get('https://63afdf4f649c73f572c415b1.mockapi.io/api/rooms', null),

]