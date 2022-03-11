import fs from 'fs';

const readInput = (dirname: string, fileName: string): string => {
  return fs.readFileSync(dirname + '/' + fileName, 'utf8');
};

const readOutput = (dirname: string, fileName: string): string => {
  return fs.readFileSync(dirname + '/' + fileName, 'utf8');
};

export { readInput, readOutput };