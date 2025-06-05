import process from 'node:process';
import { execSync } from 'node:child_process';

RunGitCommand('checkout main');
RunGitCommand('reset --hard origin');
RunGitCommand('clean -fd');
RunGitCommand('checkout ' + (process.argv[2] ? process.argv[2] : 'main'));
RunGitCommand('pull');

function RunGitCommand(arg: string) {
  execSync('git ' + arg, { stdio: 'inherit' });
}
