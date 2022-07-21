

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: "API Documentation - Education Platform",
        version: "1.0.0",
        description: "Project Application API",
        license: {
            name: 'Licensed Under MIT',
            url: 'https://spdx.org/licenses/MIT.html',
        },
        contact: {
            email: "yoav.vm@gmail.com"
        },
        servers: [
            {
                url: 'http://localhost:3001',
                description: 'Development server',
            },
        ],
    }
}

const options = {
    swaggerDefinition,
    apis: ['./configs/swagger.config.js']
}

module.exports = {
    options
};

/**
 * @swagger
 * components:
 *  securitySchemes:
 *   bearerAuth:          
 *    type: http
 *    scheme: bearer
 *    bearerFormat: JWT
 *  schemas:
 *   loginPayload:
 *    type: object
 *    properties:
 *     email:
 *      type: string
 *      example: yoav.vm@gmail.com
 *     password:
 *      type: string
 */


/**
* @swagger
*  /api/carts/:
*   get: 
*    security:
*     - bearerAuth: []  
*    tags: [ Cart ]
*    summary: Retrieves all items in a user's open cart.
*    description: Retrieves all items in a user's open cart.
*    responses:
*      200:
*       description: A list of items of user's cart.
*       content:
*        application/json:
*         schema:
*          $ref: '#/components/schemas/CartGetResponse/CurrentCart'
*/
