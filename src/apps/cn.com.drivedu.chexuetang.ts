import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.com.drivedu.chexuetang',
  name: '车学堂',
  groups: [
    {
      key: 1,
      name: '局部广告-卡片广告',
      rules: [
        {
          key: 0,
          quickFind: true,
          activityIds: 'cn.com.drivedu.chexuetang.main.activity.MainActivity_',
          matches:
            '@View[clickable=true] < [desc^="dislike"] <<n [vid="fragment_ad"]',
          snapshotUrls: 'https://i.gkd.li/i/15137783',
        },
      ],
    },
  ],
});
