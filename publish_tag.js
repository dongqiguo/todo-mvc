// Octokit.js
// https://github.com/octokit/core.js#readme
import { Octokit, App } from "octokit";


const args = process.argv.slice(2);


const [pull_number, token] = args;

console.log(pull_number, token);

const octokit = new Octokit({
  auth: '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'
})

const pr = await octokit.request('GET /repos/{owner}/{repo}/pulls/{pull_number}', {
  owner: 'guodongqi-boy',
  repo: 'todo-mvc',
  pull_number: 12
});

console.log(pr);