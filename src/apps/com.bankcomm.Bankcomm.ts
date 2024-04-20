import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.bankcomm.Bankcomm',
  name: '交通银行',
  groups: [
    {
      key: 0,
      name: '全屏广告-首页弹窗广告',
      desc: '点击x',
      quickFind: true,
      activityIds: [
        'com.bankcomm.module.biz.home.MainActivity',
        'com.hihonor.android.launcher.unihome.UniHomeLauncher',
      ],
      rules: '[vid="popup_ad_image"] < * > [vid="popup_close"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12671987',
        'https://i.gkd.li/i/12745293', // activityId: 'com.hihonor.android.launcher.unihome.UniHomeLauncher'
        'https://i.gkd.li/i/15046998',
      ],
    },
  ],
});
