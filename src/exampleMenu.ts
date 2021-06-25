import { MolgenisMenu } from './types'

const molgenisMenu: MolgenisMenu = {
  menu: {
    type: 'menu',
    id: 'main',
    label: 'Home',
    items: [
      {
        type: 'plugin',
        id: 'home',
        label: 'Home'
      },
      {
        type: 'plugin',
        id: 'navigator',
        label: 'Navigator'
      },
      {
        type: 'plugin',
        id: 'navigator',
        label: 'Navigator alt'
      },
      {
        type: 'plugin',
        id: 'dataexplorer',
        label: 'Data Explorer',
        params: 'selectedEntityType=sys_md_EntityType'
      },
      {
        type: 'menu',
        id: 'dataintegration',
        label: 'Data Integration',
        items: [
          {
            type: 'plugin',
            id: 'metadata-manager',
            label: 'Metadata Manager'
          },
          {
            type: 'menu',
            id: 'submenu',
            label: 'Submenu',
            items: [
              {
                type: 'plugin',
                id: 'sorta',
                label: 'SORTA'
              },
              {
                type: 'menu',
                id: 'subsubmenu',
                label: 'Sub Sub Menu',
                items: [
                  {
                    type: 'plugin',
                    id: 'background',
                    label: 'Test',
                    params: ''
                  }
                ]
              },
              {
                type: 'plugin',
                id: 'mappingservice',
                label: 'Mapping Service'
              }
            ]
          },
          {
            type: 'plugin',
            id: 'tagwizard',
            label: 'Tag Wizard'
          }
        ]
      },
      {
        type: 'menu',
        id: 'admin',
        label: 'Admin',
        items: [
          {
            type: 'plugin',
            id: 'indexmanager',
            label: 'Index manager'
          },
          {
            type: 'plugin',
            id: 'logmanager',
            label: 'Log manager'
          },
          {
            type: 'plugin',
            id: 'menumanager',
            label: 'Menu Manager'
          },
          {
            type: 'plugin',
            id: 'permissionmanager',
            label: 'Permission Manager'
          },
          {
            type: 'plugin',
            id: 'scheduledjobs',
            label: 'Scheduled Jobs'
          },
          {
            type: 'plugin',
            id: 'settingsmanager',
            label: 'Settings'
          },
          {
            type: 'plugin',
            id: 'thememanager',
            label: 'Theme Manager'
          },
          {
            type: 'plugin',
            id: 'usermanager',
            label: 'User Manager'
          },
          {
            type: 'plugin',
            id: 'security-ui',
            label: 'Security Manager'
          }
        ]
      }
    ]
  },
  navBarLogo: 'https://www.molgenis.org/assets/img/logo_green.png',
  selectedPlugin: 'navigator',
  authenticated: true,
  loginHref: '/login',
  topLogo: 'https://www.molgenis.org/assets/img/logo_green.png',
  topLogoMaxHeight: 150,
  helpLink: {
    label: 'Help',
    href: 'https://molgenis.gitbooks.io/molgenis/content/'
  }
}

export default molgenisMenu
