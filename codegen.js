module.exports = {
    schema: [
        {
            'https://smokushka.herokuapp.com/v1/graphql': {
                headers: {
                    "X-Hasura-Admin-Secret": "AMSCvDjV0843"
                },
            },
        },
    ],
    documents: ['./src/**/*.graqhl', './src/**/*.graphql'],
    overwrite: true,
    generates: {
        './src/generated/graphql.ts': {
            plugins: [
                'typescript',
                'typescript-operations',
                'typescript-apollo-angular'
            ]
        },
        './graphql.schema.json': {
            plugins: ['introspection'],
        },
    },
};