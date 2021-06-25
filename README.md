[![test-and-publish](https://github.com/bbeesley/async-fs/actions/workflows/test-and-publish.yml/badge.svg)](https://github.com/bbeesley/async-fs/actions/workflows/test-and-publish.yml) [![codecov](https://codecov.io/gh/bbeesley/async-fs/branch/master/graph/badge.svg)](https://codecov.io/gh/bbeesley/async-fs) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

# async-fs-wrapper

## description

Async wrappers for node's filesystem module

## usage

```typescript
import { readdir, readFile } from 'async-fs-wrapper';

const fileContents = await readFile('./path/to/file.txt', { encoding: 'utf8' }); // get the content of a file

const filesNames = await readdir('./'); // list the files in a folder

console.log(fileNames); /* returns:
[
  '.babelrc',             '.codecov.yml',
  '.eslintrc.js',         '.git',
  '.github',              '.gitignore',
  '.nvmrc',               '.vscode',
  'CHANGELOG.md',         'README.md',
  'commitlint.config.js', 'coverage',
  'dist',                 'jest.config.js',
  'node_modules',         'package-lock.json',
  'package.json',         'prettier.config.js',
  'src',                  'tsconfig.json'
]
 */
```

## api

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

- [async-fs-wrapper](#async-fs-wrapper)
  - [description](#description)
  - [usage](#usage)
  - [api](#api)
      - [Table of Contents](#table-of-contents)
    - [readFile](#readfile)
      - [Parameters](#parameters)
    - [writeFile](#writefile)
      - [Parameters](#parameters-1)
    - [appendFile](#appendfile)
      - [Parameters](#parameters-2)
    - [readdir](#readdir)
      - [Parameters](#parameters-3)
    - [copyFile](#copyfile)
      - [Parameters](#parameters-4)
    - [copyAllFilesInDir](#copyallfilesindir)
      - [Parameters](#parameters-5)
    - [mkdir](#mkdir)
      - [Parameters](#parameters-6)
    - [rmdir](#rmdir)
      - [Parameters](#parameters-7)
    - [access](#access)
      - [Parameters](#parameters-8)
    - [unlink](#unlink)
      - [Parameters](#parameters-9)

### readFile

[src/main/index.ts:33-33](https://github.com/bbeesley/async-fs/blob/6ba2a23e957fbda23a753aaed7382e0fdc12671f/src/main/index.ts#L33-L33 "Source code on GitHub")

Reads a file asynchronously

#### Parameters

*   `pointer` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | [Buffer](https://nodejs.org/api/buffer.html))** Path to the file to be read
*   `options` **ReadFileOptions**  (optional, default `{}`)

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Buffer](https://nodejs.org/api/buffer.html)>** Resolves to the content of the file

### writeFile

[src/main/index.ts:55-58](https://github.com/bbeesley/async-fs/blob/6ba2a23e957fbda23a753aaed7382e0fdc12671f/src/main/index.ts#L55-L58 "Source code on GitHub")

Writes a file asynchronously

#### Parameters

*   `pointer` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | [Buffer](https://nodejs.org/api/buffer.html))** Path to the file to be written
*   `content` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | [Buffer](https://nodejs.org/api/buffer.html) | [Uint8Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array))** Content to write to the file

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<void>** Resolves with true if the write was successful

### appendFile

[src/main/index.ts:66-69](https://github.com/bbeesley/async-fs/blob/6ba2a23e957fbda23a753aaed7382e0fdc12671f/src/main/index.ts#L66-L69 "Source code on GitHub")

Appends to a file asynchronously

#### Parameters

*   `pointer` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | [Buffer](https://nodejs.org/api/buffer.html))** Path to the file to be written
*   `content` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | [Buffer](https://nodejs.org/api/buffer.html) | [Uint8Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array))** Content to write to the file

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<void>** Resolves with true if the write was successful

### readdir

[src/main/index.ts:89-89](https://github.com/bbeesley/async-fs/blob/6ba2a23e957fbda23a753aaed7382e0fdc12671f/src/main/index.ts#L89-L89 "Source code on GitHub")

Reads a directory asynchronously

#### Parameters

*   `path` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | [Buffer](https://nodejs.org/api/buffer.html))** The directory to list the contents of
*   `options` **ReadDirOptions** Options opject to pass to readdir (optional, default `{}`)

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)<[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>>** Array of filenames

### copyFile

[src/main/index.ts:111-112](https://github.com/bbeesley/async-fs/blob/6ba2a23e957fbda23a753aaed7382e0fdc12671f/src/main/index.ts#L111-L112 "Source code on GitHub")

Copy a file asynchronously

#### Parameters

*   `from` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | [Buffer](https://nodejs.org/api/buffer.html))** The src file
*   `to` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | [Buffer](https://nodejs.org/api/buffer.html))** The dest file

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<void>** Resolves with true if the copy is successful

### copyAllFilesInDir

[src/main/index.ts:120-134](https://github.com/bbeesley/async-fs/blob/6ba2a23e957fbda23a753aaed7382e0fdc12671f/src/main/index.ts#L120-L134 "Source code on GitHub")

Copy all files in one directory to another directory

#### Parameters

*   `from` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | [Buffer](https://nodejs.org/api/buffer.html))** Input directory
*   `to` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | [Buffer](https://nodejs.org/api/buffer.html))** Output directory

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<void>** Resolves when the op is complete

### mkdir

[src/main/index.ts:141-142](https://github.com/bbeesley/async-fs/blob/6ba2a23e957fbda23a753aaed7382e0fdc12671f/src/main/index.ts#L141-L142 "Source code on GitHub")

Create a directory

#### Parameters

*   `pointer` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | [Buffer](https://nodejs.org/api/buffer.html))** Path to the directory to create

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<void>** Resolves when the op is complete

### rmdir

[src/main/index.ts:149-153](https://github.com/bbeesley/async-fs/blob/6ba2a23e957fbda23a753aaed7382e0fdc12671f/src/main/index.ts#L149-L153 "Source code on GitHub")

Remove a directory

#### Parameters

*   `pointer` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | [Buffer](https://nodejs.org/api/buffer.html))** Path to the directory to remove
*   `opts` **fs.RmDirOptions?** 

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<void>** Resolves when the op is complete

### access

[src/main/index.ts:161-162](https://github.com/bbeesley/async-fs/blob/6ba2a23e957fbda23a753aaed7382e0fdc12671f/src/main/index.ts#L161-L162 "Source code on GitHub")

Tests a user's permissions for the file or directory specified by pointer.

#### Parameters

*   `pointer` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | [Buffer](https://nodejs.org/api/buffer.html))** Path to the file to test
*   `mode` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)?** File access mode (optional, default `0`)

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<void>** 

### unlink

[src/main/index.ts:169-170](https://github.com/bbeesley/async-fs/blob/6ba2a23e957fbda23a753aaed7382e0fdc12671f/src/main/index.ts#L169-L170 "Source code on GitHub")

Asynchronously removes a file or symbolic link.

#### Parameters

*   `pointer` **Path** Path to the file to remove

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<void>** 
