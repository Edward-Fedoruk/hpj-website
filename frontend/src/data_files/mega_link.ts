import { GqlClient } from "@/gql/gql";

export interface businessUnit {
  title: string;
  url: string;
}

const gql = `{
  headerUnit {
    business_units {
      title
      url
    }
  }
}`;

export const { headerUnit } = await GqlClient.instance.request<{ headerUnit: { business_units: businessUnit[] } }>(gql);
