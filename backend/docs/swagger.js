const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'CampusEventHub API Documentation',
      version: '1.0.0',
      description: 'RESTful API documentation for CampusEventHub - Student & Campus Event Management Platform',
    },
    servers: [
      {
        url: 'http://localhost:4000',
        description: 'Development Server',
      },
    ],
  },
  apis: ['./routes/*.js'], // Quét toàn bộ annotations trong thư mục routes
};

const openapiSpecification = swaggerJsdoc(options);

module.exports = openapiSpecification;