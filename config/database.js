// require('dotenv').config({
//   path: `.env.${process.env.NODE_ENV}`
// })

module.exports = ({ env }) => {
  console.log(env('INSTANCE_CONNECTION_NAME'))
  return (
    {
      defaultConnection: 'default',
      connections: {
        default: {
          connector: 'bookshelf',
          settings: {
            // client: 'sqlite',
            // filename: env('DATABASE_FILENAME', '.tmp/data.db'),
            client: 'postgres',

            host: env('INSTANCE_CONNECTION_NAME'),
            database: env('DATABASE_NAME'),
            username: env('DATABASE_USERNAME'),
            post: env('DATABASE_PORT'),
            password: env('DATABASE_PASSWORD'),

            ssl: { "rejectUnauthorized": false },
          },
          options: {
            // useNullAsDefault: true,
          },
        },
      },
    }
  )
}
