import { List } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'JSON to PHP Array',
  path: '/json-to-php-array',
  description: 'Convert JSON to PHP Array.',
  keywords: ['json', 'to', 'php', 'array', 'convert'],
  component: () => import('./json-to-php-array.vue'),
  icon: List,
  createdAt: new Date('2023-06-18'),
});
