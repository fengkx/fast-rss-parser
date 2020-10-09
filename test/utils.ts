import { PathLike } from 'fs'
import { join } from 'path'
import fs = require('fs')

export async function readAsString(fpath: PathLike): Promise<string> {
  return fs.promises.readFile(fpath, { encoding: 'utf8' })
}

export const fixture = (file: string): string =>
  join(
    __dirname,
    '__fixture__',
    file.endsWith('json') ? 'output' : 'input',
    file,
  )
