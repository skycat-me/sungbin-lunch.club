module.exports = {
  title: 'ソンビンランチ！',
  description: 'ソンビンファミリーのソンビンファミリーによるソンビンファミリーのためのランチ',
  head: [
    ['link', {rel: 'manifest', href: '/manifest.json'}],
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['meta',{ name:"keywords", content:"key, words, vuepress"}],
    ['meta',{ name:"og:title", content:"og title"}],
    ['meta',{ name:"og:description", content:"description"}],
    ['meta',{ name:"og:type", content:"website"}],
    ['meta',{ name:"og:url", content:"og　url"}],
    ['meta',{ name:"og:image", content:"http://test.jp/logo.png"}],
  ],
  locales: {
    '/': {
      lang: 'ja'
    }
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  base: '/',
  serviceWorker: true,
  markdown: {
    config: (md) => {
      md.options.linkify = true
    },
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
    ]
  }
}
