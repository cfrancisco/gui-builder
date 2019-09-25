import PropTypes from 'prop-types';
import intl from 'react-intl-universal';
import ptBR from './locales/pt-BR.json';
import enUS from './locales/en-US.json';
import config from '../../config';

const language = config.language ? config.language.code : window.navigator.language;

const i18nProvider = ({ term }) => {
    const locales = {
        'pt-BR': ptBR,
        'en-US': enUS,
    };

    intl.init({
        currentLocale: language,
        locales,
    });

    return intl.getHTML(term).d('Esta tradução não existe');
};

i18nProvider.propTypes = {
    term: PropTypes.string.isRequired,
};

export default i18nProvider;
