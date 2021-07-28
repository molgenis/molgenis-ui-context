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

  describe('Hamburger is shown, actual nav height is bigger then the expected height', () => {
    it('should show the hamburger', () => {
      const wrapper = shallowMount(NavBar, {
        propsData: { molgenisMenu },
        data: () => {
          return {
            selectedLanguage: 'en',
            languages: ['en'],
            helperStyle: undefined,
            expectedNavHeight: 45,
            showHamburger: false,
            wrapMargin: 0,
            dynamicHamburgerBreakpoint: 5000
          }
        }
      })

      // @ts-ignore
      wrapper.vm.expectedNavHeight = -1 // calculated height is 0 so use -1 here to trigger if branch
      // @ts-ignore
      wrapper.vm.handleResize()
      // @ts-ignore
      expect(wrapper.vm.showHamburger).toBe(true)
    })
  })

  describe('Hamburger is not shown, actual nav height is not bigger then the expected height', () => {
    it('should keep showing the hamburger', () => {
      const wrapper = shallowMount(NavBar, {
        propsData: { molgenisMenu },
        data: () => {
          return {
            selectedLanguage: 'en',
            languages: ['en'],
            helperStyle: undefined,
            expectedNavHeight: 0,
            showHamburger: false,
            dynamicHamburgerBreakpoint: 5000
          }
        }
      })

      // @ts-ignore
      wrapper.vm.handleResize()
      // @ts-ignore
      expect(wrapper.vm.showHamburger).toBe(true)
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
