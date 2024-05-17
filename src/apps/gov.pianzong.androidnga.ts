import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'gov.pianzong.androidnga',
  name: 'NGA玩家社区',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      quickFind: true,
      resetMatch: 'app',
      rules: [
        '[id="gov.pianzong.androidnga:id/iv_tg_ad"]',
        '[id="gov.pianzong.androidnga:id/ksad_splash_circle_skip_view"]',
        '[id="gov.pianzong.androidnga:id/ksad_skip_view_skip"]',
        '[vid="tv_tiaoguo"]',
        '[text*="跳过"][text.length<=5]',
      ],
      snapshotUrls: [
        'https://i.gkd.li/i/12476484',
        'https://i.gkd.li/i/12706127', // activityIds: 'com.miui.home.launcher.Launcher',
        'https://i.gkd.li/i/12864707', // activityIds: 'gov.pianzong.androidnga.activity.LoadingActivity',
        'https://i.gkd.li/i/12911882', // activityIds: 'gov.pianzong.androidnga.activity.WarmstartActivity'
        'https://i.gkd.li/i/13798686', // id="gov.pianzong.androidnga:id/ksad_skip_view_skip"
        'https://i.gkd.li/i/14155643', // vid=tv_tiaoguo
        'https://i.gkd.li/i/15172694', // text*=跳过
      ],
    },
    {
      key: 1,
      name: '首页-推荐-广告卡片',
      activityIds: 'com.donews.nga.activitys.MainActivity',
      rules: ['[id="gov.pianzong.androidnga:id/iv_close_ad"]'],
      snapshotUrls: 'https://i.gkd.li/i/12482727',
    },
    {
      key: 2,
      name: '局部广告-话题-帖子列表广告',
      desc: '点击卡片x按钮关闭广告',
      activityIds:
        'gov.pianzong.androidnga.activity.forumdetail.ForumDetailActivity',
      rules: [
        {
          key: 0,
          matches:
            '[id="gov.pianzong.androidnga:id/rv_post_list"] > FrameLayout *[childCount=1 || childCount=3] > *[childCount<=4] > [text!="" && text!=null] +(1,2) *[childCount<=3 && childCount!=2] > [name*="Image" || name*="TextView"][text!=""][index=0 || index>1][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12655805',
            'https://i.gkd.li/i/12706140',
            'https://i.gkd.li/i/14123759',
            'https://i.gkd.li/i/14155652',
          ],
        },
        {
          key: 1,
          actionCdKey: 0,
          matches: '[id="gov.pianzong.androidnga:id/iv_information_ad_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13303236',
        },
      ],
    },
    {
      key: 3,
      name: '社区-顶部广告',
      activityIds: 'com.donews.nga.activitys.MainActivity',
      rules: '[id="gov.pianzong.androidnga:id/iv_close_community_ad"]',
      snapshotUrls: ['https://i.gkd.li/i/12706132'],
    },
    {
      key: 4,
      name: '全屏广告-广告弹窗',
      desc: '点击X',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.hihonor.android.launcher.unihome.UniHomeLauncher',
          matches: '[id="gov.pianzong.androidnga:id/iv_homedialog_close"]',
          exampleUrls:
            'https://m.gkd.li/57941037/346f4485-82a7-4cf3-aab3-1fe6c9bb23af',
          snapshotUrls: 'https://i.gkd.li/i/14126934',
        },
      ],
    },
  ],
});
