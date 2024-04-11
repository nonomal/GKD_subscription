import categories from './categories';
import globalGroups from './globalGroups';
import apps from './rawApps';
import { defineGkdSubscription } from '@gkd-kit/define';

const subsConfig = defineGkdSubscription({
  id: 825,
  version: 0,
  name: 'AdproのGKD订阅',
  author: 'Adpro(AdproTeam)',
  supportUri: 'https://github.com/Adpro-Team/GKD_subscription/issues',
  checkUpdateUrl: './Adpro_gkd.version.json5', // https://github.com/orgs/gkd-kit/discussions/558
  globalGroups,
  categories,
  apps,
});

export default subsConfig;
