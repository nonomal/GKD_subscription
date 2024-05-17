import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.realtech.xiaocan',
  name: '小蚕霸王餐',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 1,
          quickFind: true,
          matches: '[text^="跳过"][text.length<=10]',
          snapshotUrls: [
            'https://i.gkd.li/i/12843368',
            'https://i.gkd.li/i/13363222',
            'https://i.gkd.li/i/13363246',
          ],
        },
        {
          key: 2,
          quickFind: true,
          matches:
            '@[id$="tt_splash_skip_btn"] <<n [id="com.realtech.xiaocan:id/splash_ad_container"]',
          snapshotUrls: 'https://i.gkd.li/i/12854728',
        },
        {
          key: 3,
          quickFind: true,
          matches:
            '@View[visibleToUser=true][clickable=true] <n FrameLayout[childCount=4||childCount=3] <<n [id="com.realtech.xiaocan:id/splash_ad_container"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13694858',
            'https://i.gkd.li/i/13794403',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '弹窗广告',
      rules: [
        {
          key: 0,
          activityIds: 'com.realtech.xiaocan.MainActivity',
          matches:
            'View[childCount=3] > View + ImageView + ImageView[clickable=true][childCount=0]',
          snapshotUrls: 'https://i.gkd.li/i/13694864',
        },
      ],
    },
    {
      key: 2,
      name: '权限提示-通知权限',
      resetMatch: 'app',
      activityIds: 'com.realtech.xiaocan.MainActivity',
      rules: '[desc="开启提醒"] - ImageView[clickable=true]',
      snapshotUrls: 'https://i.gkd.li/i/14196198',
    },
    {
      key: 3,
      name: '全屏广告-优惠券弹窗',
      activityIds: 'com.realtech.xiaocan.MainActivity',
      rules: '[desc*="今日最新红包已更新"] > ImageView[index=4]',
      snapshotUrls: 'https://i.gkd.li/i/14196232',
    },
    {
      key: 4,
      name: '功能类-签到成功弹窗',
      desc: '自动点击[关闭]按钮',
      activityIds: 'com.realtech.xiaocan.MainActivity',
      rules:
        'View[childCount=6][desc!=""] > View[index=4] + ImageView[index=5][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/i/14290847',
    },
  ],
});
