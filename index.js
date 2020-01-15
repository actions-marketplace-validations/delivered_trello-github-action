const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const linkRegEx = core.getInput('link-regex');
  console.log(`Checking for links: ${linkRegEx}!`);
  const time = (new Date()).toTimeString();
  
  core.setOutput("time", time);
  core.setOutput("link", linkRegEx);
  core.setOutput("time", false);

  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}