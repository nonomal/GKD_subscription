import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 825,
  name: 'AdproのGKD订阅',
  version: 0,
  author: 'Adpro(AdproTeam)',
  checkUpdateUrl: './Adpro_gkd.version.json5',
  supportUri: 'https://github.com/Adpro-Team/GKD_subscription/issues',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
