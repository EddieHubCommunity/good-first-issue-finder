/// <reference types="@sveltejs/kit" />

export declare type Owner = {
  login: string;
};

export declare type Repository = {
  name: string;
  url: string;
  owner: Owner;
};

export declare type Node = {
  url: string;
  title: string;
  labels: LabelResponse;
  repository: Repository;
};

export declare type Edge = {
  node: Node;
};

export declare type SearchResponse = {
  issueCount: number;
  edges: Edge[];
};

export declare type LabelResponse = {
  edges: LabelEdge[];
};

export declare type LabelEdge = {
  node: LabelNode;
};

export declare type LabelNode = {
  color: string;
  name: string;
};
