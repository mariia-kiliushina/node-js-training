import getRepositories from "./github.mjs";

const userName = process.argv[2];

getRepositories(userName, (error, repos) => {
  if (error) return console.error("error" + error.message);
  repos.forEach((repo) => console.log(repo.name));
});
