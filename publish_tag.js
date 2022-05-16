// Octokit.js
// https://github.com/octokit/core.js#readme
import { Octokit, App } from "octokit";


const args = process.argv.slice(2);


const [pull_number, token] = args;

console.log(pull_number, token);

// const octokit = new Octokit({
//   auth: 'personal-access-token123'
// })

// await octokit.request('GET /repos/{owner}/{repo}/pulls/{pull_number}', {
//   owner: 'OWNER',
//   repo: 'REPO',
//   pull_number: 'PULL_NUMBER'
// })