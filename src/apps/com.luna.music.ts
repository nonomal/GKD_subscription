import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.luna.music',
  name: '汽水音乐',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView',
      snapshotUrls: 'https://i.gkd.li/i/14232395',
    },
    {
      key: 2,
      name: '全屏广告-VIP弹窗',
      desc: '直接关闭所有底部半屏弹窗',
      quickFind: true,
      activityIds: [
        'com.luna.biz.main.main.MainActivity',
        'com.luna.biz.ad.AdActivity',
      ],
      rules: [
        {
          key: 0,
          action: 'back', // 使用点击方式有概率无效
          matches: 'FlattenUIText[text="看视频免费听"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13533795',
            'https://i.gkd.li/i/13660652',
            'https://i.gkd.li/i/13533797',
            'https://i.gkd.li/i/13613296', // 避免在此页面误触
          ],
        },
        {
          key: 1,
          action: 'back', // 使用点击方式有概率无效
          matches: 'FlattenUIText[text="当前已享"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14767233',
            'https://i.gkd.li/i/13613296', // 避免在此页面误触
          ],
        },
      ],
    },
    {
      key: 7,
      name: '功能类-看广告视频拿VIP',
      desc: '30s广告后点击"跳过"',
      activityIds: [
        'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
        'com.luna.biz.ad.AdActivity',
      ],
      rules: [
        {
          key: 0,
          name: '等待 30s 点击"跳过"',
          actionDelay: 30000,
          matches: 'WebView > WebView > View TextView[text="| 跳过"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13611006',
            'https://i.gkd.li/i/13613085',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          name: '点击"坚持退出"',
          quickFind: true,
          matches: '[text="坚持退出"]',
          snapshotUrls: 'https://i.gkd.li/i/13613184',
        },
      ],
    },
    {
      key: 8,
      quickFind: true,
      name: '功能类-看广告获取听歌时长',
      desc: '点击领取成功-点击坚持退出',
      activityIds: 'com.ss.android.excitingvideo.ExcitingVideoActivity',
      rules: [
        {
          key: 0,
          matches: '@[text*="领取成功"][clickable=true] - [text="反馈"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14767236',
            'https://i.gkd.li/i/14391770',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: '[text="坚持退出"]',
          snapshotUrls: 'https://i.gkd.li/i/14767235',
        },
      ],
    },
    {
      key: 9,
      name: '功能类-看视频免费听弹窗',
      desc: '点击【立得全天畅听】',
      activityIds: 'com.luna.biz.main.main.MainActivity',
      rules: '[text="立得全天畅听"][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/i/14237527',
    },
    {
      key: 10,
      name: '评价提示-评分弹窗',
      desc: '使用返回关闭弹窗',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          quickFind: true,
          action: 'back',
          matches: '[text="为汽水音乐评分"]',
          exampleUrls:
            'https://m.gkd.li/57941037/a7e53af0-8b84-4619-b369-69b949ab2ce4',
          snapshotUrls: 'https://i.gkd.li/i/14720841',
        },
      ],
    },
    {
      key: 11,
      name: '局部广告-悬浮窗广告',
      desc: '点击关闭',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.luna.biz.main.main.MainActivity',
          matches:
            '[id="com.luna.music:id/fl_pendant_container"] > [id="com.luna.music:id/view_close"]',
          exampleUrls:
            'https://m.gkd.li/57941037/8a427d5f-680b-4562-9cf3-90b1db82df0f',
          snapshotUrls: 'https://i.gkd.li/i/13674376',
        },
      ],
    },
  ],
});
