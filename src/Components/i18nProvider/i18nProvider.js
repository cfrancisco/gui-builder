import PropTypes from 'prop-types';
import intl from 'react-intl-universal';
import config from 'config';

const i18nProvider = ({ localeObj, termKey }) => {
    const lang = config.language ? config.language.code : window.navigator.language;
    let language = '';
    const localesArray = Object.values(localeObj.default);
    const localePT = Object.values(localesArray)[0];
    const localeEN = Object.values(localesArray)[1];

    switch (lang) {
    case 'pt':
        language = 'pt-BR';
        break;
    case 'pt-BR':
        language = 'pt-BR';
        break;
    case 'pt-pt':
        language = 'pt-BR';
        break;
    case 'en':
        language = 'en-US';
        break;
    default:
        language = 'en-US';
    }

    const locales = {
        'pt-BR': localePT,
        'en-US': localeEN,
    };

    intl.init({
        currentLocale: language,
        locales,
    });

    return intl.getHTML(termKey).d(termKey);
};

i18nProvider.propTypes = {
    termKey: PropTypes.string.isRequired,
};

export default i18nProvider;
