export type Owner = {
  login: string;
};

export type Repository = {
  name: string;
  url: string;
  owner: Owner;
};

export type Node = {
  url: string;
  title: string;
  repository: Repository;
};

export type Edge = {
  node: Node;
};

export type SearchResponse = {
  issueCount: number;
  edges: Edge[];
};
