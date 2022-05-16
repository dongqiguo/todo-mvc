// Octokit.js
// https://github.com/octokit/core.js#readme
import { Octokit, App } from "octokit";


const args = process.argv.slice(2);


const [pull_number, token] = args;

console.log(pull_number, token);

const octokit = new Octokit({
  auth: '09b1c87f0252b18fd5e6e3e211f4a456df3642d1'
})

const pr = await octokit.request('GET /repos/{owner}/{repo}/pulls/{pull_number}', {
  owner: 'guodongqi-boy',
  repo: 'todo-mvc',
  pull_number: 12
});

console.log(pr);