import { execSync } from "node:child_process";

await RunGitCommand("checkout main");
await RunGitCommand("reset --hard origin");
await RunGitCommand("clean -fd");
await RunGitCommand("checkout " + (process.argv[2] ? process.argv[2] : "main"));
await RunGitCommand("pull");

async function RunGitCommand(arg: string) {
  execSync("git " + arg, { stdio: "inherit" });
}