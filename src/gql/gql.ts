import { GraphQLClient } from 'graphql-request';

export class GqlClient {
    private static gqlInstance: GraphQLClient | null = null;

    static get instance(): GraphQLClient {
        if (!GqlClient.gqlInstance) {
            const STRAPI_URL = import.meta.env.PUBLIC_STRAPI_URL || "http://localhost:1337";
            const ENDPOINT = `${STRAPI_URL}/graphql`;

            const newInstance = new GraphQLClient(ENDPOINT);
            GqlClient.gqlInstance = newInstance;

            return newInstance;
        }
        return GqlClient.gqlInstance;
    }
}