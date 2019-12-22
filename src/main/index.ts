import * as fs from 'fs';

type Path = string | Buffer;
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
type GenericFn = (...args: any[]) => any;

const wrap = (fn: GenericFn, ...args: any): Promise<ReturnType<GenericFn>> =>
  new Promise((resolve, reject) =>
    fn(...args, (err: Error, data: any) => (err ? reject(err) : resolve(data)))
  );

type ReadFileOptions = {
  encoding?: null;
  flag?: string;
};

/**
 * Reads a file asynchronously
 * @param {(string | Buffer)}  pointer Path to the file to be read
 * @param {ReadFileOptions} [options={}]
 * @returns {Promise<Buffer>}  Resolves to the content of the file
 */
export const readFile = (
  pointer: Path,
  options: ReadFileOptions = {}
): Promise<Buffer> => wrap(fs.readFile, pointer, options);

/**
 * Writes a file asynchronously
 * @param {(string|Buffer)}  pointer Path to the file to be written
 * @param {(string|Buffer|Uint8Array)}  content Content to write to the file
 * @returns {Promise<void>}                  Resolves with true if the write was successful
 */
export const writeFile = (pointer: Path, content: any): Promise<void> =>
  wrap(fs.writeFile, pointer, content);

type ReadDirOptions = {
  encoding?: string;
  withFileTypes?: boolean;
};
/**
 * Reads a directory asynchronously
 * @param {(string|Buffer)}     path    The directory to list the contents of
 * @param {ReadDirOptions} [options={}] Options opject to pass to readdir
 * @returns {Promise<string[]>}  Array of filenames
 */
export const readdir = (
  path: Path,
  options: ReadDirOptions = {}
): Promise<string[]> => wrap(fs.readdir, path, options);

/**
 * Copy a file asynchronously
 * @param {(string|Buffer)} from    The src file
 * @param {(string|Buffer)} to      The dest file
 * @returns {Promise<void>}          Resolves with true if the copy is successful
 */
export const copyFile = (from: Path, to: Path): Promise<void> =>
  wrap(fs.copyFile, from, to);

/**
 * Copy all files in one directory to another directory
 * @param {(string|Buffer)}  from    Input directory
 * @param {(string|Buffer)}  to      Output directory
 * @returns {Promise<void>} Resolves when the op is complete
 */
export const copyAllFilesInDir = async (
  from: Path,
  to: Path
): Promise<void> => {
  if (Buffer.isBuffer(from)) from = from.toString();
  if (Buffer.isBuffer(to)) to = to.toString();
  const inputDir = from.replace(/\/$/, '');
  const outputDir = to.replace(/\/$/, '');
  const rawFileNames = await readdir(inputDir);
  await Promise.all(
    rawFileNames.map(filename =>
      copyFile(`${inputDir}/${filename}`, `${outputDir}/${filename}`)
    )
  );
};

/**
 * Create a directory
 * @param {(string|Buffer)} pointer Path to the directory to create
 * @returns {Promise<void>} Resolves when the op is complete
 */
export const mkdir = async (pointer: Path): Promise<void> =>
  wrap(fs.mkdir, pointer);

/**
 * Remove a directory
 * @param {(string|Buffer)} pointer Path to the directory to remove
 * @returns {Promise<void>} Resolves when the op is complete
 */
export const rmdir = async (pointer: Path): Promise<void> =>
  wrap(fs.rmdir, pointer);

/**
 * Tests a user's permissions for the file or directory specified by pointer.
 * @param {(string|Buffer)} pointer - Path to the file to test
 * @param {number} [mode] - File access mode
 * @returns {Promise<void>}
 */
export const access = async (pointer: Path, mode = 0): Promise<void> =>
  wrap(fs.access, pointer, mode);
