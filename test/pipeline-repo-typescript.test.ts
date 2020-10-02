import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as PipelineRepoTypescript from '../lib/pipeline-repo-typescript-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new PipelineRepoTypescript.PipelineRepoTypescriptStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
