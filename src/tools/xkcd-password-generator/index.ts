import { Lock } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'xkcd password generator',
  path: '/xkcd-password-generator',
  description: 'Based on the XKCD comic "Password Strength".',
  keywords: ['xkcd', 'password', 'generator'],
  component: () => import('./xkcd-password-generator.vue'),
  icon: Lock,
  createdAt: new Date('2023-11-22'),
});