import PropTypes from 'prop-types';
import intl from 'react-intl-universal';
// import ptBR from './devices/locales/pt-BR.json';
// import enUS from './devices/locales/en-US.json';
import config from '../../config';

const i18nProvider = ({ subject, term }) => {
    const lang = config.language ? config.language.code : window.navigator.language;
    let language = '';

    switch (lang) {
    case 'pt':
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

    let localeBasePath = '';

    if (language === 'pt-BR') {
        localeBasePath = './locales/pt';
    } else {
        localeBasePath = './locales/en';
    }

    const locales = {
        'pt-BR': require(`${localeBasePath}/${subject}.json`),
        'en-US': require(`${localeBasePath}/${subject}.json`),
    };

    intl.init({
        currentLocale: language,
        locales,
    });

    return intl.getHTML(term).d(term);
};

i18nProvider.propTypes = {
    subject: PropTypes.string.isRequired,
    term: PropTypes.string.isRequired,
};

export default i18nProvider;
