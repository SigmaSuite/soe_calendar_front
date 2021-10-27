const joi = require('joi');

const schema = joi
  .object()
  .keys({
    NEXT_PUBLIC_ASSET_PREFIX: joi.string().allow(''),
  })
  .unknown();

const { value: envVars, error } = schema.validate(process.env);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
  ASSET_PREFIX: envVars.NEXT_PUBLIC_ASSET_PREFIX,
};
