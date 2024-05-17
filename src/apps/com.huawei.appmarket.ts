import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.appmarket',
  name: '华为应用市场',
  groups: [
    {
      key: 2,
      name: '功能类-应用更新页面-点击[查看更多]',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds:
            'com.huawei.appmarket.service.appmgr.view.activity.AppUpdateActivity',
          matches: '[text="查看更多"]',
          exampleUrls:
            'https://m.gkd.li/57941037/e2283b1d-3041-49c5-aca2-7c165c83ce37',
          snapshotUrls: 'https://i.gkd.li/i/14738587',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-热门应用推荐弹窗',
      desc: '点击[直接进入]',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds:
            'com.huawei.appgallery.upgraderecommendation.ui.UpgradeRecommendActivity',
          matches: '[text="直接进入"]',
          exampleUrls:
            'https://m.gkd.li/57941037/89e6f2eb-b543-4dd8-88ce-6e888d0d8c8a',
          snapshotUrls: 'https://i.gkd.li/i/14861810',
        },
      ],
    },
  ],
});
