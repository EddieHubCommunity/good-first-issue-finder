/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const child_process = require('child_process');

const envPath = path.join(__dirname, '..', '..', '.env');

console.log('Checking ENV...');

if (!process.env.VITE_TOKEN) {
  if (!fs.existsSync(envPath)) {
    console.error(
      'Please add a GitHub Token as a variable in a `.env` file in VITE_TOKEN (Clone .env.example)',
    );
    process.exit(1);
  } else {
    const content = fs.readFileSync(envPath);

    const env = dotenv.parse(content, { debug: true });

    if (!env.VITE_TOKEN) {
      console.error('Please add a GitHub Token as a variable in a `.env` file in VITE_TOKEN');
      process.exit(1);
    }
  }

  child_process.execSync('npm run dev');
}
