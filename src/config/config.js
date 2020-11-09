const config = {
    production: {
      secret: process.env.secret,
      MONGO_URI: process.env.MONGO_URI,
      port: process.env.PORT,
    },
    development: {
      secret: 'AASSDDAA',
      MONGO_URI: 'mongodb://localhost:27017/mydb',
      port: 3000,
    },
  };
  
  export const getConfig = env => config[env] || config.development;