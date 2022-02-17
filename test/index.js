import clap from '../pkg/clap.js';
import fs from 'fs';

const app = fs.readFileSync('./app.yaml', 'utf-8');

try {
    const matches = clap.get_matches(app, process.argv);
    console.log(`pos: ${matches.value_of_s("pos")}`);
    console.log(`Demo flag: ${matches.is_present_s("flag")}`);
} catch (e) {
    console.error(e);
    process.exitCode = 1;
}