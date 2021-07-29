import { shallowMount } from '@vue/test-utils'
import NavBar from '../../../src/components/NavBar.vue'
import molgenisMenu from '../../../src/exampleMenu'
jest.mock('@molgenis/molgenis-api-client')

describe('NavBar.vue', () => {
  it('should match the snapshot', () => {
    const wrapper = shallowMount(NavBar, {
      propsData: { molgenisMenu }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  describe('Hamburger is shown, screen is resized to a value larger then dynamicHamburgerBreakpoint', () => {
    it('should hide the hamburger', () => {
      const wrapper = shallowMount(NavBar, {
        propsData: { molgenisMenu }
      })

      // @ts-ignore
      wrapper.vm.showHamburger = true
      // @ts-ignore
      wrapper.vm.dynamicHamburgerBreakpoint = 10
      // @ts-ignore
      wrapper.vm.handleResize()
      // @ts-ignore
      expect(wrapper.vm.showHamburger).toBe(false)
    })
  })

  describe('Hamburger is shown, screen is resided to a value smaller then dynamicHamburgerBreakpoint', () => {
    it('should keep showing the hamburger', () => {
      const wrapper = shallowMount(NavBar, {
        propsData: { molgenisMenu },
        data: () => {
          return {
            selectedLanguage: 'en',
            languages: ['en'],
            helperStyle: undefined,
            expectedNavHeight: 45,
            showHamburger: false,
            wrapMargin: 8,
            dynamicHamburgerBreakpoint: 5000
          }
        }
      })

      // @ts-ignore
      wrapper.vm.showHamburger = true
      // @ts-ignore
      wrapper.vm.handleResize()
      // @ts-ignore
      expect(wrapper.vm.showHamburger).toBe(true)
    })
  })

  describe('Hamburger is shown, if menu get a second row', () => {
    it('should show the hamburger', () => {
      const wrapper = shallowMount(NavBar, {
        propsData: { molgenisMenu },
        data: () => {
          return {
            selectedLanguage: 'en',
            languages: ['en'],
            helperStyle: undefined,
            showHamburger: false,
            dynamicHamburgerBreakpoint: 5000
          }
        }
      })

      // Unit test does not use an actual dom, so calculating getPixelValue does not work in mounted
      wrapper.vm.$data.expectedNavHeight = 45; // height for a single row
      wrapper.vm.$data.wrapMargin = 0;

      // @ts-ignore
      wrapper.vm.$refs.mgNavBarNav = { clientHeight: 100 }
      // @ts-ignore
      wrapper.vm.handleResize()
      // @ts-ignore
      expect(wrapper.vm.showHamburger).toBe(true)
    })
  })

  describe('Hamburger is not shown, items fit inside a single row', () => {
    it('should not show the hamburger', () => {
      const wrapper = shallowMount(NavBar, {
        propsData: { molgenisMenu },
        data: () => {
          return {
            selectedLanguage: 'en',
            languages: ['en'],
            helperStyle: undefined,
            showHamburger: false,
            dynamicHamburgerBreakpoint: 5000
          }
        }
      })

      // Unit test does not use an actual dom, so calculating getPixelValue does not work in mounted
      wrapper.vm.$data.expectedNavHeight = 45; // height for a single row
      wrapper.vm.$data.wrapMargin = 0;

      // @ts-ignore
      wrapper.vm.$refs.mgNavBarNav = { clientHeight: 45 }
      // @ts-ignore
      wrapper.vm.handleResize()
      // @ts-ignore
      expect(wrapper.vm.showHamburger).toBe(false)
    })
  })

  describe('When the navbar is destroyed', () => {
    it('the event listener should be removed', () => {
      const removeEventListenerSpy = jest.fn()
      // @ts-ignore
      global.removeEventListener = removeEventListenerSpy
      const wrapper = shallowMount(NavBar, {
        propsData: { molgenisMenu },
        data: () => {
          return {
            selectedLanguage: 'en',
            languages: ['en'],
            helperStyle: undefined,
            expectedNavHeight: 0,
            showHamburger: false,
            dynamicHamburgerBreakpoint: 100
          }
        }
      })

      // @ts-ignore
      wrapper.destroy()
      expect(removeEventListenerSpy).toHaveBeenCalled()
    })
  })

  describe('When not signed in', () => {
    it('no errors should be generated', () => {
      const menu = {
        menu: {
          type: 'menu',
          id: 'main',
          label: 'Home',
          items: [
            {
              type: 'plugin',
              id: 'home',
              label: 'Home'
            }
          ]
        },
        navBarLogo: 'https://www.molgenis.org/assets/img/logo_green.png',
        authenticated: true,
        loginHref: '/login',
        helpLink: {
          label: 'Help',
          href: 'https://molgenis.gitbooks.io/molgenis/content/'
        }
      }

      shallowMount(NavBar, { propsData: { molgenisMenu: menu } })
    })
  })
})
