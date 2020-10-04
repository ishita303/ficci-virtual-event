import { UserRole } from "../helpers/authHelper";

/*
Menu Types:
"menu-default", "menu-sub-hidden", "menu-hidden"
*/
export const defaultMenuType = 'menu-default';

export const subHiddenBreakpoint = 1400;
export const menuHiddenBreakpoint = 768;
export const defaultLocale = 'en';
export const localeOptions = [
  { id: 'en', name: 'English - LTR', direction: 'ltr' },
  { id: 'es', name: 'Español', direction: 'ltr' },
  { id: 'enrtl', name: 'English - RTL', direction: 'rtl' },
];

export const firebaseConfig = {
  apiKey: "AIzaSyD1RagWTzPMCSH00R5URkWClhfp3cVE8r4",
    authDomain: "ficci-d7464.firebaseapp.com",
    databaseURL: "https://ficci-d7464.firebaseio.com",
    projectId: "ficci-d7464",
    storageBucket: "ficci-d7464.appspot.com",
    messagingSenderId: "952081560690",
    appId: "1:952081560690:web:575fcc83e70f66245dbeeb",
    measurementId: "G-WK01QXW298"
};

// export const currentUser = {
//   id: 1,
//   title: 'Ishita Jain',
//   img: '/assets/img/profiles/l-1.jpg',
//   date: 'Last seen today 15:24',
//   role: UserRole.Admin
// }


export const adminRoot = '/app';
export const buyUrl = 'https://1.envato.market/k4z0';
export const searchPath = `${adminRoot}/pages/miscellaneous/search`;
export const servicePath = 'https://api.coloredstrategies.com';

export const themeColorStorageKey = '__theme_selected_color';
export const isMultiColorActive = true;
export const defaultColor = 'light.purplemonster';
export const isDarkSwitchActive = true;
export const defaultDirection = 'ltr';
export const themeRadiusStorageKey = '__theme_radius';
export const isAuthGuardActive = true;
export const colors = [
  'bluenavy',
  'blueyale',
  'blueolympic',
  'greenmoss',
  'greenlime',
  'purplemonster',
  'orangecarrot',
  'redruby',
  'yellowgranola',
  'greysteel',
];
