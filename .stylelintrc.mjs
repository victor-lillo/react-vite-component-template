/** @type {import('stylelint').Config} */

export default {
  extends: ['stylelint-config-standard'],
  rules: {
    'selector-class-pattern': '^.[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$',
  },
}
