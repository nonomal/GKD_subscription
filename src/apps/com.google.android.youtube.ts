import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.google.android.youtube',
  name: 'YouTube',
  groups: [
    {
      key: 0,
      name: '局部广告-视频播放页-贴片广告',
      activityIds: [
        'com.google.android.apps.youtube.app.watchwhile.WatchWhileActivity',
        'com.google.android.apps.youtube.app.watchwhile.MainActivity',
        'com.google.android.youtube',
      ],
      quickFind: true,
      rules: [
        {
          key: 0,
          name: '类型1',
          matches: '[id="com.google.android.youtube:id/skip_ad_button_text"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13797491',
            'https://i.gkd.li/i/12565261',
          ],
        },
        {
          key: 1,
          name: '类型2',
          matches: '[id="com.google.android.youtube:id/modern_skip_ad_text"]',
          snapshotUrls: ['https://i.gkd.li/i/13705106'],
        },
      ],
    },
    {
      key: 1,
      name: '局部广告-视频播放页-赞助商广告',
      activityIds: [
        'com.google.android.apps.youtube.app.watchwhile.WatchWhileActivity',
        'com.google.android.apps.youtube.app.watchwhile.MainActivity',
      ],
      rules:
        '[desc="更多选项"||desc^="More"] + [desc="关闭广告面板"||desc^="Close"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12877346',
        'https://i.gkd.li/i/13797491',
        'https://i.gkd.li/i/13705106',
        'https://i.gkd.li/i/14786081',
      ],
    },
    {
      key: 2,
      name: '局部广告-首页-赞助商广告',
      activityIds:
        'com.google.android.apps.youtube.app.watchwhile.WatchWhileActivity',
      rules:
        'ImageView < @Button < ViewGroup +3 Button[desc*="YouTube Premium"]',
      snapshotUrls: 'https://i.gkd.li/i/12877357',
    },
    {
      key: 3,
      name: '局部广告-订阅YouTube Premium浮窗广告',
      activityIds:
        'com.google.android.apps.youtube.app.watchwhile.MainActivity',
      rules:
        'ViewGroup[desc="免费试用 1 个月"] < * - * > ViewGroup[text="不用了，谢谢"]', // 缺少英文快照
      snapshotUrls: 'https://i.gkd.li/i/13797512',
    },
    {
      key: 4,
      name: '权限提示-通知权限',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text="开启通知"] < * < * +2 * >2 [text="不用了"]',
      snapshotUrls: 'https://i.gkd.li/i/14194155',
    },
  ],
});
