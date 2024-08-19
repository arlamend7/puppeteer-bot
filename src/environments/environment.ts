import fs from 'fs';

const environmentPath = './config.json';
const environment : Environment = JSON.parse(fs.readFileSync(environmentPath, 'utf-8'));

export default environment;

interface Environment {
  puppeteerOptions: PuppeteerOptions;
}

interface PuppeteerOptions {
  headless: boolean;
  defaultViewport: DefaultViewport;
  args: string[];
}

interface DefaultViewport {
  width: number;
  height: number;
}