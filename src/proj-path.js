import fs from 'fs-extra-promise';
import _ from 'lodash';

module.exports = () => {
  let projPath = '';
  let possiblePaths = _.remove(require.main.paths, (path) => {
    const matches = path.match(/node_modules/g) || [];
    if (matches.length > 1) return false;
    return fs.existsSync(path);
  });
  _.each(require.main.filename.substr(1, require.main.filename.length - 1).split('/'), (segment, i) => {
    possiblePaths = _.remove(possiblePaths, (path) => {
      return path.substr(1, path.length - 1).split('/')[i] === segment;
    });
    if (possiblePaths.length === 1) {
      projPath = possiblePaths[0].substr(0, possiblePaths[0].indexOf('/node_modules'));
      return;
    }
  });
  return projPath;
};
