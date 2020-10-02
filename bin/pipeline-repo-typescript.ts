#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { PipelineRepoTypescriptStack } from '../lib/pipeline-repo-typescript-stack';


const app = new cdk.App();
new PipelineRepoTypescriptStack(app, 'PipelineStack', {
  env: {
    account: '834816610298',
    region: 'us-east-1',
  }
});

app.synth();