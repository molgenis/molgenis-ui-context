import { MolgenisMenu } from '@/types'

const molgenisMenu: MolgenisMenu = {
  menu: {
    id: 'main',
    label: 'Home',
    href: 'main',
    type: 'MENU',
    items: [{ id: 'home', label: 'Home', href: 'home', type: 'PLUGIN' },
      {
        id: 'importdata',
        label: 'Import data',
        href: 'importdata',
        type: 'MENU',
        items: [{
          id: 'one-click-importer',
          label: 'Quick data import',
          href: 'one-click-importer',
          type: 'PLUGIN'
        },
        { id: 'importwizard', label: 'Advanced data import', href: 'importwizard', type: 'PLUGIN' }]
      },
      { id: 'navigator', label: 'Navigator', href: 'navigator', type: 'PLUGIN' },
      { id: 'dataexplorer', label: 'Data Explorer', href: 'dataexplorer', type: 'PLUGIN' },
      {
        id: 'dataintegration',
        label: 'Data Integration',
        href: 'dataintegration',
        type: 'MENU',
        items: [{
          id: 'metadata-manager',
          label: 'Metadata Manager',
          href: 'metadata-manager',
          type: 'PLUGIN'
        },
        { id: 'mappingservice', label: 'Mapping Service', href: 'mappingservice', type: 'PLUGIN' },
        { id: 'sorta', label: 'SORTA', href: 'sorta', type: 'PLUGIN' },
        { id: 'tagwizard', label: 'Tag Wizard', href: 'tagwizard', type: 'PLUGIN' }]
      },
      {
        id: 'plugins',
        label: 'Plugins',
        href: 'plugins',
        type: 'MENU',
        items: [{ id: 'searchAll', label: 'Search all data', href: 'searchAll', type: 'PLUGIN' },
          { id: 'swagger', label: 'API documentation', href: 'swagger', type: 'PLUGIN' },
          { id: 'appmanager', label: 'App manager', href: 'appmanager', type: 'PLUGIN' },
          { id: 'feedback', label: 'Feedback', href: 'feedback', type: 'PLUGIN' },
          { id: 'jobs', label: 'Job overview', href: 'jobs', type: 'PLUGIN' },
          { id: 'questionnaires', label: 'Questionnaires', href: 'questionnaires', type: 'PLUGIN' },
          { id: 'scripts', label: 'Scripts', href: 'scripts', type: 'PLUGIN' }]
      },
      {
        id: 'admin',
        label: 'Admin',
        href: 'admin',
        type: 'MENU',
        items: [{ id: 'indexmanager', label: 'Index manager', href: 'indexmanager', type: 'PLUGIN' },
          { id: 'logmanager', label: 'Log manager', href: 'logmanager', type: 'PLUGIN' },
          { id: 'menumanager', label: 'Menu Manager', href: 'menumanager', type: 'PLUGIN' },
          {
            id: 'permissionmanager',
            label: 'Permission Manager',
            href: 'permissionmanager',
            type: 'PLUGIN'
          },
          { id: 'scheduledjobs', label: 'Scheduled Jobs', href: 'scheduledjobs', type: 'PLUGIN' },
          { id: 'settingsmanager', label: 'Settings', href: 'settingsmanager', type: 'PLUGIN' },
          { id: 'thememanager', label: 'Theme Manager', href: 'thememanager', type: 'PLUGIN' },
          { id: 'usermanager', label: 'User Manager', href: 'usermanager', type: 'PLUGIN' },
          { id: 'security-ui', label: 'Security Manager', href: 'security-ui', type: 'PLUGIN' }]
      },
      { id: 'useraccount', label: 'Account', href: 'useraccount', type: 'PLUGIN' }]
  },
  navBarLogo: '/img/logo_molgenis_small.png',
  selectedPlugin: 'navigator',
  authenticated: true,
  loginHref: '/login',
  helpLink: {
    label: 'Help',
    href: 'https://molgenis.gitbooks.io/molgenis/content/'
  }
}

export default molgenisMenu
