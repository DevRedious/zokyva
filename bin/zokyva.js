#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

const scriptPath = path.join(__dirname, '..', 'zokyva');
const args = process.argv.slice(2);
const pythonCmd = process.platform === 'win32' ? 'python' : 'python3';

const child = spawn(pythonCmd, [scriptPath, ...args], {
  stdio: 'inherit',
  env: process.env
});

child.on('error', (err) => {
  if (err.code === 'ENOENT') {
    console.error('\x1b[31m[Zokyva Error]\x1b[0m Python 3 is required to run Zokyva. Please install Python 3.10+ and ensure it is in your PATH.');
  } else {
    console.error(`\x1b[31m[Zokyva Error]\x1b[0m ${err.message}`);
  }
  process.exit(1);
});

child.on('exit', (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
  } else {
    process.exit(code ?? 0);
  }
});
