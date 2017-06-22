import fs from 'fs-extra-promise';
import path from 'path';
import projPath from '../src/proj-path';
import gitignoreClean from 'gitignore-clean';

export default async function clean() {
  await gitignoreClean(path.resolve(projPath(), '.gitignore'), ['node_modules/']);
}
