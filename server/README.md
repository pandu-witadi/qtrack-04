# qtrack-server-01

### sailsjs serve react
- sailsjs serve react in single port
https://stackoverflow.com/questions/43205867/sails-react-on-a-single-heroku-server


### change lodash
- change lodash in package.json & config/globals.js

- create .env file
- app.js
const dotenv = require('dotenv')
dotenv.config()

### mongodb
- install mongodb & sails-mongo,
- set config/datastores.js & config/models.js
- create dir db, create db/init.js, add package.json  .. npm run db:init
- set database in db/init.js


# change .sailsrc and config/custom.js
- add
{
    "generators": {
        "modules": {}
    },
    "paths": {
        "public": "assets"
    },
    "_generatedWith": {
        "sails": "1.5.7",
        "sails-generate": "2.0.9"
    }
}

- add dir assets/project-background-images
- add dir assets/user-avatars
- add dir private/attachments
- set BASE_URL in .env file  ... needed for attachments

# running
 node app.js
- pm2 start app.js --name qtrack-server-01
