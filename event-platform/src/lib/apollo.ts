import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4p28urz1po601xlbm7880yl/master',
    cache: new InMemoryCache()
})