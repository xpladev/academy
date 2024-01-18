const swaggerUi = require("swagger-ui-express")
const swaggereJsdoc = require("swagger-jsdoc")

const options = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "GamethonServer API",
      description:
        "",
    },
    servers: [
      {
        url: "http://localhost:40202",        
      },
    ],
  },
  apis: [
    "./routes/server/*.ts",
    "./routes/wallet/*.ts",
    "./routes/client/*.ts"
  ],
}
const specs = swaggereJsdoc(options)

module.exports = { swaggerUi, specs }