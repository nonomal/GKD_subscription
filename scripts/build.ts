import { updateDist } from '@gkd-kit/tools';
import subscription from './check';
import { updateReadMeMd } from '../src/updateMd';
import { updatePackageVersion } from '../src/updatePackageVersion';

await updateDist(subscription);

await updateReadMeMd();

await updatePackageVersion();
