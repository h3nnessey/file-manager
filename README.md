# Node.js CLI File Manager

Start app from root dir of project: `npm run start -- --username=your_username`

## Before get started
-   All paths with spaces must be enclosed in single or double quotes: `cd 'program files/somedir'`
-   In some file operations if the file already exists it will cause an error (e.g. copying a file
    into a folder where such a file already exists )
-   If you pass more or fewer arguments than needed it will cause an error
## Commands:

1. Navigation & working directory
    - Go upper from current directory (when you are in the root folder this operation shouldn't
      change working directory): `up`
    - Go to dedicated folder from current directory (path_to_directory can be relative or absolute):
      `cd path_to_directory`
    - Print in console list of all files and folders in current directory: `ls`
2. Basic operations with files
    - Read file and print it's content in console: `cat path_to_file `
    - Create empty file in current working directory: `add new_file_name`
    - Rename file: `rn path_to_file new_filename`
    - Copy file: `cp path_to_file path_to_new_directory`
    - Move file: `mv path_to_file path_to_new_directory`
    - Delete file: `rm path_to_file `
3. OS
    - Get EOL: `os --EOL`
    - Get host machine CPUs info: `os --cpus`
    - Get home directory: `os --homedir`
    - Get current system username: `os --username`
    - Get CPU architecture: `os --architecture`
4. Hash
    - Calculate hash for file and print it into console: `hash path_to_file`
5. Compress/decompress file using Brotli algorithm
    - Compress file: `compress path_to_file path_to_destination`
    - Decompress file: `decompress path_to_file path_to_destination`
