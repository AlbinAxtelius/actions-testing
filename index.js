const core = require("@actions/core");
const github = require("@actions/github");

try {
  const token = core.getInput("GITHUB_TOKEN");

  const octokit = github.getOctokit(token);

  const repos = await octokit.rest.repos.listForUser({
    username: "AlbinAxtelius",
  });

  repos.data.map((repo) => repo.name).forEach((repo) => console.log(repo));
} catch (error) {
  core.setFailed(error.message);
}
