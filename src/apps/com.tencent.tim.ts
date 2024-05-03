import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.tim',
  name: 'TIM',
  groups: [
    {
      key: 1,
      name: '功能类-自动查看原图',
      quickFind: true,
      activityIds: 'com.tencent.mobileqq.richmediabrowser.AIOGalleryActivity',
      rules: '[text^="查看原图"]',
      snapshotUrls: 'https://i.gkd.li/i/15196002',
    },
  ],
});
