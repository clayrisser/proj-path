import childProcess from 'child_process';
import projPath from '../src/proj-path';

export default async function start() {
  await new Promise((resolve, reject) => {
    childProcess.spawn('node ./node_modules/babel-cli/bin/babel-node ./test/test.js', {
      stdio: 'inherit',
      shell: true
    }).on('close', resolve).on('error', reject);
  });
}
