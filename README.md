# Recoil 中文文档

当前翻译版本 [e377043 2020-05-25T10:09:16Z](https://github.com/facebookexperimental/Recoil/commit/e37704379e13c11c4ed4afed8da553157e3aae96)

### 安装

```
$ yarn
```

### 本地开发

```
$ yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### 构建

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### 部署

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### 持续集成

Some common defaults for linting/formatting have been set for you. If you integrate your project with an open source Continuous Integration system (e.g. Travis CI, CircleCI), you may check for issues using the following command.

```
$ yarn ci
```
