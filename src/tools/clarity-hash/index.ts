import { MarkEmailReadOutlined } from '@vicons/material';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Clarity Hash',
  path: '/clarity-hash',
  description:
    'Converts an email to Microsoft\'s Clarity hash format.',
  keywords: [
    'hash',
    'digest',
    'crypto',
    'security',
    'text',
    'SHA256',
  ],
  component: () => import('./clarity-hash.vue'),
  icon: MarkEmailReadOutlined,
  redirectFrom: ['/ms'],
});
