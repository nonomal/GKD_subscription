import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.eg.android.AlipayGphone',
  name: '支付宝',
  groups: [
    {
      key: 0,
      name: '全屏广告-关闭花呗升级弹窗',
      rules: [
        {
          key: 0,
          activityIds:
            'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
          matches: 'View[childCount=3] > @Image - View[text="花呗服务升级"]',
          snapshotUrls: 'https://i.gkd.li/i/12737055',
        },
        {
          key: 1,
          quickFind: true,
          activityIds: [
            'com.alipay.android.msp.ui.views.MspContainerActivity',
            'com.alipay.android.msp.ui.views.MspUniRenderActivity',
          ],
          matches: [
            '[text="根据相关法律法规要求，请尽快完成花呗升级"]',
            'FrameLayout > FrameLayout  > FrameLayout > [text="关闭"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13183946',
            'https://i.gkd.li/i/12826077',
          ],
        },
        {
          key: 2,
          quickFind: true,
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          matches: [
            '[text*="花呗服务"]',
            '@[clickable=true] >2 [text="暂不升级，继续付款"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13631362',
            'https://i.gkd.li/i/13857535',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '定位提示-请求定位权限弹窗',
      quickFind: true,
      activityIds: 'com.eg.android.AlipayGphone.AlipayLogin',
      rules:
        '@[id="com.alipay.mobile.antui:id/closeButton"] - [id="com.alipay.mobile.antui:id/textAndButtonLayout"] [id="com.alipay.mobile.antui:id/tipTextView"][text^="开启定位权限"]',
      snapshotUrls: 'https://i.gkd.li/i/12792688',
    },
    {
      key: 2,
      name: '权限提示-通知权限',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          key: 0,
          name: '首页底部提示',
          matches: '@[desc="关闭"] - * >n [text^="开启通知权限"]',
          snapshotUrls: 'https://i.gkd.li/i/13194955',
        },
        {
          key: 1,
          name: '消息页弹窗提示',
          matches: '[text="选择通知接收范围"] +3 * > [text="暂时不用"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13669620',
            'https://i.gkd.li/i/14944514',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '更新提示',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: '[text="立即更新" || text="马上体验"] <n * > [text*="稍后"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13327095',
            'https://i.gkd.li/i/15010554',
          ],
        },
        {
          key: 1,
          matches:
            '[text="版本更新"||text^="Version"] - [id="com.alipay.mobile.antui:id/btn_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13490805',
            'https://i.gkd.li/i/13580594',
          ],
        },
        {
          key: 2,
          matches:
            '[text="立即升级最新版支付宝客户端"] < LinearLayout + [id="com.alipay.mobile.advertisement:id/announcementview_righticon"]',
          snapshotUrls: 'https://i.gkd.li/i/13490797',
        },
      ],
    },
    {
      key: 4,
      name: '功能类-设置支付宝小组件',
      desc: '点击关闭',
      quickFind: true,
      activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
      rules: [
        {
          matches: [
            '[text="设置支付宝小组件"]',
            '@[clickable=true] > [text="关闭"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13327349',
        },
      ],
    },
    {
      key: 11,
      name: '全屏广告-借呗消费信贷协议',
      desc: '点击X',
      rules: [
        {
          activityIds:
            'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
          matches:
            '[text="同意协议并刷脸验证"] < * -4 * >2 Image[visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/13915022',
        },
      ],
    },
    {
      key: 12,
      name: '全屏广告-2023资产报告',
      activityIds:
        'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity',
      rules: '[desc="全屏广告"] >2 [desc="关闭"]',
      snapshotUrls: 'https://i.gkd.li/i/14112225',
    },
    {
      key: 14,
      name: '局部广告-拼多多先买后付广告',
      rules:
        '[text="拼多多 推荐你"] <n FrameLayout +2 FrameLayout > [text="关闭"]',
      snapshotUrls: 'https://i.gkd.li/i/13832300',
    },
    {
      key: 15,
      name: '分段广告-扫码成功底部卡片广告',
      activityIds:
        'com.alipay.android.phone.wallet.aptrip.ui.activity.result.ResultPageActivityV2',
      rules: [
        {
          key: 0,
          matches: '@[desc="展开更多选项"] > ImageView',
          exampleUrls:
            'https://m.gkd.li/101449500/251acfea-4c83-46b9-a016-e718dacaa75b',
          snapshotUrls: 'https://i.gkd.li/i/14546044',
        },
        {
          key: 1,
          preKeys: 0,
          quickFind: true,
          matches: '@RelativeLayout >2 [text="对该内容不感兴趣"]',
          exampleUrls:
            'https://m.gkd.li/101449500/22b353c4-fc2a-4461-b0b5-6e5cd7253893',
          snapshotUrls: 'https://i.gkd.li/i/14546047',
        },
      ],
    },
    {
      key: 16,
      name: '功能类-关闭小额免密支付开关',
      actionMaximum: 1,
      quickFind: true,
      activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
      rules:
        '@CheckBox[checked=true][checked=true] < * - [text~="开通(.*)免密支付"]',
      snapshotUrls: 'https://i.gkd.li/i/14627775',
    },
    {
      key: 19,
      name: '分段广告-服务消息页面-卡片广告',
      desc: '点击[关闭]-点击[不感兴趣]',
      quickFind: true,
      activityIds:
        'com.alipay.android.phone.messageboxapp.ui.MsgBoxTabActivity',
      rules: [
        {
          key: 0,
          matches: '@[clickable=true] > [text="广告"]',
          exampleUrls:
            'https://m.gkd.li/57941037/c3e08729-6d97-4a87-bfc3-1e38dd95c384',
          snapshotUrls: 'https://i.gkd.li/i/14787644',
        },
        {
          preKeys: [0],
          key: 1,
          matches: '@[clickable=true] >2 [text="不感兴趣"]',
          exampleUrls:
            'https://m.gkd.li/57941037/64c8c27d-23de-43b1-a87b-e2107b644eb1',
          snapshotUrls: 'https://i.gkd.li/i/14787585',
        },
      ],
    },
    {
      key: 20,
      name: '功能类-[0元下单权益]弹窗',
      desc: '点击关闭',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          matches:
            '[text="关闭"] < @FrameLayout[clickable=true] <3 FrameLayout[childCount=3] < * + FrameLayout[childCount=3] [text*="0元下单"]',
          exampleUrls:
            'https://m.gkd.li/57941037/3575bbbc-717b-466d-b863-443a15629ef6',
          snapshotUrls: 'https://i.gkd.li/i/14893122',
        },
      ],
    },
    {
      key: 21,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
        {
          activityIds:
            'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
          matches:
            'View[childCount=3] > @TextView[text=""][clickable=true][visibleToUser=true] + * > [text!=null]',
          exampleUrls:
            'https://m.gkd.li/57941037/5df9b6fb-7455-492c-a726-fb6a42266a02',
          snapshotUrls: 'https://i.gkd.li/i/14907533',
        },
      ],
    },
    {
      key: 22,
      name: '全屏广告-[下次支付用花呗]弹窗',
      desc: '点击"30天不再提醒"',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          matches: ['[text="同意协议并开通"]', '[text="30天不再提醒"]'],
          exampleUrls:
            'https://m.gkd.li/57941037/8daecaeb-35f0-4f3a-8d5a-a19098a992d5',
          snapshotUrls: [
            'https://i.gkd.li/i/14060628',
            'https://i.gkd.li/i/15050300',
          ],
        },
      ],
    },
  ],
});
