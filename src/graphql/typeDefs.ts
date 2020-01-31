import {importSchema} from "graphql-import";

export default async (): Promise<string> => await importSchema('./schemas/*.graphql')