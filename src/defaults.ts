import {Theme, UserSettings} from './definitions';
import ThemeEngines from './generators/theme-engines';
import {isMacOS, isWindows} from './utils/platform';

export const DEFAULT_THEME: Theme = {
    mode: 1,
    brightness: 100,
    contrast: 100,
    grayscale: 0,
    sepia: 0,
    useFont: false,
    fontFamily: isMacOS() ? 'Helvetica Neue' : isWindows() ? 'Segoe UI' : 'Open Sans',
    textStroke: 0,
    engine: ThemeEngines.dynamicTheme,
    stylesheet: '',
    darkSchemeBackgroundColor: 'auto',
    darkSchemeTextColor: 'auto',
    lightSchemeBackgroundColor: 'auto',
    lightSchemeTextColor: 'auto',
    scrollbarColor: isMacOS() ? '' : 'auto',
    selectionColor: 'auto',
    lightColorScheme: 'None',
    darkColorScheme: 'None',
};

export const DEFAULT_SETTINGS: UserSettings = {
    enabled: true,
    theme: DEFAULT_THEME,
    customThemes: [],
    siteList: [],
    siteListEnabled: [],
    applyToListedOnly: false,
    changeBrowserTheme: false,
    notifyOfNews: false,
    syncSettings: true,
    automation: '',
    time: {
        activation: '18:00',
        deactivation: '9:00',
    },
    location: {
        latitude: null,
        longitude: null,
    },
    previewNewDesign: false,
    enableForPDF: true,
};

export const DEFAULT_COLORS = {
    darkScheme: {
        background: '#181a1b',
        text: '#e8e6e3',
    },
    lightScheme: {
        background: '#dcdad7',
        text: '#181a1b',
    },
};
