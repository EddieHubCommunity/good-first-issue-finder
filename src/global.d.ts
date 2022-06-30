/// <reference types="@sveltejs/kit" />

export declare type Owner = {
  login: string;
};

export declare type Repository = {
  name: string;
  url: string;
  owner: Owner;
  primaryLanguage: PrimaryLanguage;
};

export declare type Node = {
  createdAt: string;
  url: string;
  title: string;
  labels: LabelResponse;
  repository: Repository;
};

export declare type Edge = {
  node: Node;
};

export declare type SearchResponse = {
  labels: string[];
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

export declare type PrimaryLanguage = {
  color: string;
  name: string;
  id: string;
};
