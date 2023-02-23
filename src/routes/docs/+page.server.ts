import { toHtml } from 'hast-util-to-html';
import { fromMarkdown } from 'mdast-util-from-markdown';
import { toHast } from 'mdast-util-to-hast';
import { visit } from 'unist-util-visit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const rawChangelog = Object.values(import.meta.glob('/CHANGELOG.md', { eager: true, as: 'raw' }));

  const changes: string[] = [];

  const mdast = fromMarkdown(rawChangelog[0]);

  visit(mdast, 'listItem', (node) => {
    node.type = 'paragraph';
    // @ts-ignore it's following the official docs https://github.com/syntax-tree/mdast-util-to-hast#use
    changes.push(toHtml(toHast(node)));
  });

  return {
    changes,
  };
};
