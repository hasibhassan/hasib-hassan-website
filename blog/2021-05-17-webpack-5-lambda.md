---
title: Webpack 5 for AWS Lambda
author: Hasib Hassan
author_url: https://github.com/hasibhassan
description: How to use Webpack with AWS Lambda.
image: https://images.unsplash.com/photo-1506399309177-3b43e99fead2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1348&q=80
tags: [serverless-framework, aws, serverless, lambda]
---

Configure your Lambda functions to use Webpack for better performance and cost.

<!--truncate-->

![Servers](https://images.unsplash.com/photo-1506399309177-3b43e99fead2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1348&q=80)

Out of the box, AWS Lambda is known to be a cost-effective and approachable alternative to containers due to its short-lived nature, developer experience, and scalability. The Lambda service downloads your code on demand each time a Lambda function is spun up and destroys it away when not in use. It can handle millions of requests per second, is billed by the millisecond, and resuses the function [execution environment](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-context.html) for requests that come in after the first request that triggers the function environment to be provisioned. One issue with this is that some requests experience a small lag called a **_cold start_** when a function environment is first being provisioned and downloading the code. To reduce this cold start time you can reduce the size of your code that is to be downloaded. In order to do this you will need to use a bundler for your source code.

This example will use the Serverless Framework which makes it painless to get started with Lambda functions and has a rich set of plugins one of which is the **serverless-webpack** plugin.

To get started with the Serverless Framework ensure you have Node.js and npm installed and run:

```bash
npm i -g serverless
```

Next create a project with their template generator:

```bash
serverless create -t aws-nodejs -p your-project-name
```

`cd` into your project and install the serverless-webpack plugin

```bash
serverless plugin install --name serverless-webpack
```

Lastly, set the required config files in the root of the project

```javascript title="webpack.config.js"
const path = require('path')
const slsw = require('serverless-webpack')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: slsw.lib.entries,
  target: 'node',
  mode: 'production',
  optimization: {
    minimize: false,
  },
  performance: {
    hints: false,
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  output: {
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
  },
}
```

```json title=".babelrc"
{
  "comments": false,
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": "12"
        }
      }
    ]
  ]
}
```

To run Webpack on the source code and deploy the bundle to AWS Lambda configure the appropriate [AWS credentials](https://www.serverless.com/framework/docs/providers/aws/guide/credentials/) with the Serverless Framework and deploy:

```bash
serverless deploy
```
