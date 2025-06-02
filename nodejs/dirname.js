#! /usr/bin/env node

import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = fileURLToPath(path.dirname(import.meta.url));

console.log(path.join('Current directory: ', __dirname));
