// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  tags: ['UiContext'],
  before: function (browser) {
    browser.resizeWindow(1024, 786)
  },
  'display navbar test': browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .click('.jumbotron button.btn')
      .waitForElementVisible('.navbar', 5000)
      .assert.elementPresent('.navbar')
      .assert.elementPresent('.navbar-brand')
      .assert.elementPresent('.navbar-expand-md')
      .assert.elementPresent('.nav-item.active')
      .assert.containsText('.active', 'Navigator')
      .resizeWindow(200, 400)
      .waitForElementVisible('.navbar-toggler-icon', 5000)
      .assert.cssClassNotPresent('.navbar.navbar-light.bg-light', '.navbar-expand-md')
      .end()
  },
  'display footer test': browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.footer')
      .assert.containsText('footer > div > div:nth-child(1)', 'some additionalMessage')
      .end()
  },
  'show cookiewall and hide on click': browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.jumbotron')
      .assert.elementPresent('.jumbotron button.btn')
      .click('.jumbotron button.btn')
      .pause(1000)
      .assert.not.elementPresent('.jumbotron')
      .assert.not.elementPresent('.jumbotron button.btn')
      .end()
  },
  'wil not show cookiewall after click': browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.jumbotron')
      .assert.elementPresent('.jumbotron button.btn')
      .click('.jumbotron button.btn')
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .assert.not.elementPresent('.jumbotron')
      .assert.not.elementPresent('.jumbotron button.btn')
      .end()
  },
  'show logo above menu bar': browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.jumbotron')
      .assert.elementPresent('.jumbotron button.btn')
      .click('.jumbotron button.btn')
      .pause(1000)
      .assert.not.elementPresent('.jumbotron')
      .assert.elementPresent('#top-logo-vue-banner')
      .assert.elementPresent('#logo-top')
      .getElementSize('#logo-top', function (size) {
        this.assert.strictEqual(
          Math.abs(size.value.width - 460) < 2, true,
          'Width of logo 100% when screen wider than logo')
      })
      .end()
  }
}
