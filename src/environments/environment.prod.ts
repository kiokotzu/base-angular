import extend from 'lodash-es/extend';

import { base } from './base.environment';


export const environment = extend(base, {
  production: true
});
