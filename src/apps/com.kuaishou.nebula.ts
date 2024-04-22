import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kuaishou.nebula',
  name: '快手极速版',
  groups: [
    {
      key: 1,
      name: '全屏广告-红包弹窗',
      rules: [
        {
          key: 1,
          quickFind: true,
          activityIds: 'com.yxcorp.gifshow.HomeActivity',
          matches: '@ImageView[clickable=true] -2 [text$="免费红包"]',
          exampleUrls:
            'https://m.gkd.li/101449500/f7bbd1db-f519-4ff9-96cb-4cb5b2f483a2',
          snapshotUrls: 'https://i.gkd.li/i/14879912',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-朋友推荐弹窗',
      quickFind: true,
      activityIds: 'com.yxcorp.gifshow.HomeActivity',
      rules: [
        {
          key: 0,
          matches: '@[vid="close_btn"] <n * > [text="朋友推荐"]',
          snapshotUrls: 'https://i.gkd.li/i/15061832',
        },
      ],
    },
  ],
});
