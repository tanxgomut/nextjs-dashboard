// eslint.config.mjs
import nextLintConfig from 'eslint-config-next';

/** @type {import('eslint').Linter.FlatConfig[]} */
const config = [
  ...nextLintConfig,

  // หากต้องการเพิ่ม rules
  // {
  //   rules: {
  //     "semi": ["error", "always"]
  //   }
  // }
];

export default config;