/**
 * 配置编译环境和线上环境之间的切换
 */
const envSetting = {
  development: {
    fcOrigin: 'https://test.wxb.com.cn',
    insOrigin: 'https://test.wxb.com.cn/supermarket',
    staticOrigin: 'https://static.wxb.com.cn/frontEnd',
    gateServer: 'https://test.wxb.com.cn/substation',
  },
  production: {
    fcOrigin: 'https://test.wxb.com.cn',
    insOrigin: 'https://i.wxb.com.cn',
    staticOrigin: 'https://static.wxb.com.cn/frontEnd',
    gateServer: 'https://substation.wxb.com.cn',
  },
}

const hosts = envSetting[process.env.NODE_ENV] || envSetting.development

export { hosts }
