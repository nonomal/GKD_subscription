import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.duokan.phone.remotecontroller',
  name: '万能遥控',
  deprecatedKeys: [0],
  groups: [
    {
      key: 4,
      name: '定位提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      activityIds:
        'com.xiaomi.mitv.phone.remotecontroller.HoriWidgetMainActivityV2',
      rules:
        '[id="com.duokan.phone.remotecontroller:id/ll_permission"] [text="取消"]',
      snapshotUrls: 'https://i.gkd.li/i/13642080',
    },
  ],
});
