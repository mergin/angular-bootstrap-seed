export const environment = {
    production: true,
    giphy: {
        host: 'http://api.giphy.com/',
        baseUrl: 'v1/gifs/',
        apiKey: 'dc6zaTOxFJmzC',
        defaultSearch: 'cats'
    },
    defaultLanguage: {
        code: 'en',
        name: 'English'
    },
    languagesList: [
        {
            code: 'en',
            name: 'English'
        },
        {
            code: 'es',
            name: 'Español'
        },
        {
            code: 'fr',
            name: 'Français'
        },
        {
            code: 'de',
            name: 'Deutsch'
        },
        {
            code: 'it',
            name: 'Italiano'
        },
        {
            code: 'pl',
            name: 'Polski'
        }
    ],
    debug: false
};
