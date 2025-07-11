import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

// Swagger definition configuration
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'School API',
    version: '1.0.0',
    description: 'API for managing students, courses, and teachers',
  },
  servers: [
    {
      url: 'http://localhost:3000/',
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
  // Apply security globally to all endpoints unless overridden
  security: [{ bearerAuth: [] }],
};

// Swagger options including API docs location
const options = {
  definition: swaggerDefinition,
  apis: ['**/controllers/*.js'], // Path to the API docs
};

// Initialize swagger-jsdoc -> returns validated swagger spec in json format
const swaggerSpec = swaggerJSDoc(options);

// Export swagger UI middleware functions for Express setup
export const serveSwagger = swaggerUi.serve;
export const setupSwagger = swaggerUi.setup(swaggerSpec);
