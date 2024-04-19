import { updateDist } from '@gkd-kit/tools';
import subscription from './check';
import { updateReadMeMd } from './updateMd';

await updateDist(subscription);

await updateReadMeMd();
