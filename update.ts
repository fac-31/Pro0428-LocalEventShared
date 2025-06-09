// Get command-line arguments (like process.argv[2])
const branch = Deno.args[0] ?? "main";

// Helper to run git commands
async function runGitCommand(args: string[]) {
  const command = new Deno.Command("git", {
    args,
    stdin: "inherit",
    stdout: "inherit",
    stderr: "inherit",
  });

  const { code } = await command.output();
  if (code !== 0) {
    console.error(`git ${args.join(" ")} failed`);
    Deno.exit(code);
  }
}

// Sequence of git commands
await runGitCommand(["checkout", "main"]);
await runGitCommand(["reset", "--hard", "origin"]);
await runGitCommand(["clean", "-fd"]);
await runGitCommand(["checkout", branch]);
await runGitCommand(["pull"]);

