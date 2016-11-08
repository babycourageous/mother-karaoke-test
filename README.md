# starter-kit
A simple Jekyll startup kit for web projects.

This starter kit is meant to be used on sites that are hosted outside of github.
As a result, the source code lives in the app folder and gulp builds the site
in a separate dist folder.

Uses deploy script from https://github.com/X1011/git-directory-deploy:
## run
Do this every time you want to deploy, or have your CI server do it.

1. check out the branch or commit of the source you want to use. The script will use this commit to generate a message when it makes its own commit on the deploy branch.
2. generate the files in `deploy_directory`
3. make sure you have no uncommitted changes in git's index. The script will abort if you do. (It's ok to have uncommitted files in the work tree; the script does not touch the work tree.)
4. if `deploy_directory` is a relative path (the default is), make sure you are in the directory you want to resolve against. (For the default, this means you should be in the project's root.)
5. run `./deploy.sh`
