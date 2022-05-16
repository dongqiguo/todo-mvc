// Octokit.js
// https://github.com/octokit/core.js#readme
import { Octokit } from "octokit";


const args = process.argv.slice(2);

const [token] = args;

const octokit = new Octokit({
  auth: token
})

const result = await octokit.request('POST /repos/{owner}/{repo}/releases', {
  owner: 'guodongqi-boy',
  repo: 'todo-mvc',
  tag_name: 'v1.0.0',
  target_commitish: 'master',
  name: 'v1.0.0',
  body: 'Description of the release',
  draft: false,
  prerelease: false,
  generate_release_notes: false
});

console.log(result);