// src/index.ts

// The 'export *' line makes your KhmerConverter class available directly 
// when a user imports from your package:
// import { KhmerConverter } from 'khmer-utils';

// Note: Because we are using "module": "nodenext" in tsconfig.json, 
// we must include the '.js' extension even though the file is a .ts file.
export * from './khmerConverter.js';