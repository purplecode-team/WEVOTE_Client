import * as adminHandlers from './admin';
import * as mainHandlers from './main';
import * as promiseHandlers from './promise';

export const handlers = [
  ...Object.values(mainHandlers),
  ...Object.values(adminHandlers),
  ...Object.values(promiseHandlers),
];
