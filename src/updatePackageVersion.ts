import fs from 'node:fs/promises';
import json5 from 'json5';

const orderdStringify = (
  obj: any,
  keys: string[],
  replacer?: (this: any, key: string, value: any) => any,
  space?: string | number,
) => {
  const filteredEntries: [string, unknown][] = [];
  for (const key of keys) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      filteredEntries.push([key, obj[key]]);
    }
  }
  return (
    JSON.stringify(Object.fromEntries(filteredEntries), replacer, space) + '\n'
  );
};

export const updatePackageVersion = async () => {
  const pkgF = await fs.readFile(`${process.cwd()}/package.json`, 'utf-8');
  const pkg = JSON.parse(pkgF);
  const pkgKeys = Object.keys(pkg);

  const versionF = await fs.readFile(
    `${process.cwd()}/dist/Adpro_gkd.version.json5`,
    'utf-8',
  );
  const version = json5.parse(versionF).version;

  pkg.version = `1.${version}.0`;
  await fs.writeFile(
    process.cwd() + '/package.json',
    orderdStringify(pkg, pkgKeys, undefined, 2),
    'utf-8',
  );
};
