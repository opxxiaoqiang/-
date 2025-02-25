import type { FooterData } from '@theojs/lumen'

export const Footer_Data: FooterData = {
  beian: {
    icp: '鄂ICP备2024060426号',
    police: '粤公网安备44200102445449号',
    showIcon: true
  },
  author: {
    name: 'Theo-Messi',
    link: 'https://github.com/Theo-Messi'
  },
  group: [
    {
      title: 'GitHub Source',
      icon: 'mdi:github',
      links: [
        {
          name: 'Theo-Docs',
          href: 'https://github.com/Theo-Messi/Theo-Docs'
        },
        {
          name: '玄学宝典',
          href: 'https://github.com/Theo-Messi/xx.theojs.cn'
        },
        {
          name: '常用配置文件',
          href: 'https://github.com/Theo-Messi/dotfiles'
        },
        {
          name: 'Lumen',
          href: 'https://github.com/Theo-Messi/lumen'
        }
      ]
    },
    {
      title: '合作伙伴',
      icon: 'mdi:partnership',
      links: [
        {
          name: '青云梯',
          icon: 'el:fire',
          color: 'rgba(255, 87, 51, 1)',
          href: 'https://qytcc01.qingyunti.pro/register?aff=jjgD79Jd'
        },
        { name: '银河录像局', href: 'https://nf.video/kaIuE' },
        { name: '奈飞小铺', href: 'https://ihezu.love/UKTer6' },
        {
          name: 'FlyingBird',
          href: 'https://fbinv02.fbaff.cc/auth/register?code=RZP3'
        },
        {
          name: '飞兔云',
          href: 'https://feitu.im/index.html?register=2cFF8mg4'
        },
        {
          name: 'SMS-Activate',
          href: 'https://sms-activate.io/?ref=8170513'
        }
      ]
    },
    {
      title: '观影指南',
      icon: 'mdi:local-movies',
      links: [
        {
          name: 'Netflix',
          href: 'https://doc.theojs.cn/streaming/Netflix-guide'
        },
        {
          name: 'Disney+',
          href: 'https://doc.theojs.cn/streaming/Disney-introduce'
        },
        {
          name: 'Spotify Premium',
          href: 'https://doc.theojs.cn/streaming/Spotify'
        },
        {
          name: 'YouTube Premium',
          href: 'https://doc.theojs.cn/streaming/YouTube'
        },
        { name: 'Hulu', href: 'https://doc.theojs.cn/streaming/Hulu' },
        { name: 'HBO Max', href: 'https://doc.theojs.cn/streaming/HBO-Max' }
      ]
    },
    {
      title: '相关链接',
      icon: 'mdi:link-variant',
      links: [
        { name: 'Theo-Docs', href: 'https://doc.theojs.cn/' },
        { name: '玄学宝典', href: 'https://xx.theojs.cn/' },
        { name: 'VitePress', href: 'https://vitepress.dev/' }
      ]
    }
  ]
}
