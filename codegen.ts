// codegen.ts
import { printSchema } from 'graphql';
import type { CodegenConfig } from '@graphql-codegen/cli';
import { schema } from './graphql/schema';

const config: CodegenConfig = {
  schema: printSchema(schema),
  documents: ["app/**/*.ts?(x)"],
  generates: {
    './src/gql/': {
      preset: 'client',
      plugins: [],
    },
    'schema.graphql': {
      plugins: ['schema-ast'],
    },
  },
};

export default config;