import { appDeprecatedKeysMap } from './appDeprecatedKeys';
import { RawApp } from '@gkd-kit/api';

export const checkDeprecatedGroupKeys = (apps: RawApp[]) => {
  apps.forEach((app) => {
    const deprecatedKeys = appDeprecatedKeysMap.get(app.id);
    if (deprecatedKeys) {
      app.groups.forEach(({ key, name }) => {
        if (deprecatedKeys.includes(key)) {
          console.error({
            configName: app.name,
            appId: app.id,
            groupName: name,
            groupKey: key,
          });
          throw new Error('invalid deprecated group key');
        }
      });
    }
  });
};
