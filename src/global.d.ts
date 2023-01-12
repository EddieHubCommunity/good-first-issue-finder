/// <reference types="@sveltejs/kit" />

export declare type Owner = {
  avatarUrl: string;
  login: string;
};

export declare type Repository = {
  name: string;
  url: string;
  owner: Owner;
  primaryLanguage: PrimaryLanguage;
  codeOfConduct: CodeOfConduct;
  licenseInfo: LicenseInfo;
};

export declare type CodeOfConduct = {
  name: string;
};

export declare type LicenseInfo = {
  name: string;
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

export declare type pageInfo = {
  hasNextPage: boolean;
  endCursor: string;
};

export declare type SearchResponse = {
  labels: string[];
  issueCount: number;
  pageInfo: pageInfo;
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
