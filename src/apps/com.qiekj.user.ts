import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qiekj.user',
  name: '胖乖生活',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.qiekj.user.MainActivity',
      rules: [
        {
          key: 0,
          matches:
            '[id="com.qiekj.user:id/native_splash_view"] >n [text^="跳过"]',
          snapshotUrls: 'https://i.gkd.li/i/12903088',
        },
        {
          key: 1,
          matches:
            '[id="com.kwad.dy.sdk:id/ksad_splash_root_container"] >n [text="跳过"]',
          snapshotUrls: 'https://i.gkd.li/i/12903086',
        },
        {
          key: 2,
          matches:
            '[id="com.kwad.dy.sdk:id/ksad_splash_root_container"] >n ViewGroup > TextView + TextView + ImageView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12903095',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-支付自动抵扣',
      desc: '点击【自动抵扣】开关',
      fastQuery: true,
      activityIds: '.ui.activity.scan.AfterPayUseAct',
      rules: [
        {
          matches:
            '[vid="tv_automatic_use"] + [vid="switchView"][checked=false]',
          exampleUrls: 'https://e.gkd.li/23e3fc7e-1668-448d-824e-3e7238b18972',
          snapshotUrls: 'https://i.gkd.li/i/17260785',
        },
      ],
    },
  ],
});
