const path = require('path');

module.exports = {
    mode: "development",
    entry: {
        index: './src/index.js',
        sider: './src/DOM/sider.js',
        projects: './src/DOM/projects.js',
        structure: './src/DOM/structure.js',
        project: './src/Domain/project.js',
        task: './src/Domain/task.js',
        repository: './src/Domain/repository.js',
        projectsPresenter: './src/Presenters/projectsPresenter',
      },
    devtool: "inline-source-map",
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        ],
      },
  };