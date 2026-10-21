import * as migration_20261016_185911 from './20261016_185911';
import * as migration_20261021_203312 from './20261021_203312';

export const migrations = [
  {
    up: migration_20261016_185911.up,
    down: migration_20261016_185911.down,
    name: '20261016_185911',
  },
  {
    up: migration_20261021_203312.up,
    down: migration_20261021_203312.down,
    name: '20261021_203312'
  },
];
