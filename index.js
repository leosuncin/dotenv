const dotEnv = require('dotenv-safe');
const dotEnvExpand = require('dotenv-expand');

dotEnvExpand(dotEnv.config())
