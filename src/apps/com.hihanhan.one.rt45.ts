import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hihanhan.one.rt45',
  name: '一个',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      fastQuery: true,
      rules: '[vid="ivClose"]',
      snapshotUrls: 'https://i.gkd.li/i/14099393',
    },
  ],
});
