import { Context } from '@/types'
export const context: Context = {
  logoTopMaxHeight: 150,
  navBarLogo: '/img/Logo_Blue_Small.png',
  email: 'user@example.org',
  username: 'user',
  menu: {
    id: 'main',
    label: 'Home',
    items: [
      { type: 'plugin', id: 'home', label: 'Home' },
      { type: 'plugin', id: 'app-molgenis-app-example', label: 'Example', params: '' },
      {
        type: 'menu',
        id: 'importdata',
        label: 'Import data',
        items: [
          { type: 'plugin', id: 'one-click-importer', label: 'Quick data import' },
          { type: 'plugin', id: 'importwizard', label: 'Advanced data import' }]
      },
      { type: 'plugin', id: 'navigator', label: 'Navigator' },
      { type: 'plugin', id: 'dataexplorer', label: 'Data Explorer' },
      {
        type: 'menu',
        id: 'dataintegration',
        label: 'Data Integration',
        items: [
          { type: 'plugin', id: 'metadata-manager', label: 'Metadata Manager' },
          { type: 'plugin', id: 'mappingservice', label: 'Mapping Service' },
          { type: 'plugin', id: 'sorta', label: 'SORTA' },
          { type: 'plugin', id: 'tagwizard', label: 'Tag Wizard' }]
      },
      {
        type: 'menu',
        id: 'plugins',
        label: 'Plugins',
        items: [
          { type: 'plugin', id: 'searchAll', label: 'Search all data' },
          { type: 'plugin', id: 'swagger', label: 'API documentation' },
          { type: 'plugin', id: 'appmanager', label: 'App manager' },
          { type: 'plugin', id: 'feedback', label: 'Feedback' },
          { type: 'plugin', id: 'jobs', label: 'Job overview' },
          { type: 'plugin', id: 'questionnaires', label: 'Questionnaires' },
          { type: 'plugin', id: 'scripts', label: 'Scripts' }]
      },
      {
        type: 'menu',
        id: 'admin',
        label: 'Admin',
        items: [
          { type: 'plugin', id: 'logmanager', label: 'Log manager' },
          { type: 'plugin', id: 'menumanager', label: 'Menu Manager' },
          { type: 'plugin', id: 'permissionmanager', label: 'Permission Manager' },
          { type: 'plugin', id: 'scheduledjobs', label: 'Scheduled Jobs' },
          { type: 'plugin', id: 'settings', label: 'Settings' },
          { type: 'plugin', id: 'thememanager', label: 'Theme Manager' },
          { type: 'plugin', id: 'usermanager', label: 'User Manager' },
          { type: 'plugin', id: 'security-ui', label: 'Security Manager' }]
      },
      { type: 'plugin', id: 'useraccount', label: 'Account' }]
  },
  loginHref: '/login',
  helpLink: { label: 'Help', href: 'https://molgenis.gitbooks.io/molgenis/content/' },
  authenticated: false,
  showCookieWall: false,
  additionalMessage: 'Footerdefooter',
  version: '8.3.0-SNAPSHOT',
  buildDate: '2019-11-07 15:05 UTC',
  roles: []
}
export default context
