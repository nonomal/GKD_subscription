import { defineGkdApp } from "@gkd-kit/define";

export default defineGkdApp({
  id: 'com.sup.android.superb',
  name: '皮皮虾',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          quickFind: true,
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView <<n [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/14667409',
        },
      ],
    },
    {
      key: 2,
      name: '综合广告-信息流广告',
      desc: '伪装正常内容广告',
      activityIds: 'com.sup.android.base.MainActivity',
      rules: [
        // 局部广告
        {
          key: 0,
          quickFind: true,
          matches: '@[text="关闭广告"] + RelativeLayout > [text="立即下载"]',
          snapshotUrls: 'https://i.gkd.li/i/14471889',
        },
        // 分段广告
        {
          key: 1,
          matches:
            'RecyclerView > FrameLayout[id!=null] >6 ImageView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/14886478',
        },
        {
          key: 2,
          preKeys: 1,
          quickFind: true,
          matches: '@RelativeLayout > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/14886477',
        },
      ],
    },
    {
      key: 5,
      name: '权限提示-通知权限',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text="开启推送通知"] +2 * > [text="以后再说"]',
      snapshotUrls: 'https://i.gkd.li/i/13691081',
    },
    {
      key: 6,
      name: '局部广告-右上角红包悬浮窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.sup.android.base.MainActivity',
      rules:
        'FrameLayout > RelativeLayout > @ImageView[clickable=true] + ImageView',
      snapshotUrls: 'https://i.gkd.li/i/13624220',
    },
    {
      key: 7,
      quickFind: true,
      name: '更新提示',
      desc: '点击我再想想',
      rules: [
        {
          matches: '[text="发现新版本"] +2 * > [text="我再想想"]',
          snapshotUrls: 'https://i.gkd.li/i/13858490',
        },
      ],
    },
  ],
});
