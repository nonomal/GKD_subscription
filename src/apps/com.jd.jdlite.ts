import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jd.jdlite',
  name: '京喜特价',
  groups: [
    {
      key: 1,
      name: '首页广告弹窗',
      activityIds: 'com.jd.jdlite.MainFrameActivity',
      rules: '@[desc="关闭页面"] - FrameLayout >n [text="极速版弹窗"]',
      snapshotUrls: 'https://i.gkd.li/i/12727396',
    },
    {
      key: 10,
      name: '请求通知权限弹窗',
      activityIds: 'com.jd.jdlite.MainFrameActivity',
      rules:
        '@ImageView[clickable=true] - LinearLayout > [text="开启消息通知"]',
      snapshotUrls: 'https://i.gkd.li/i/13062969',
    },
  ],
});
