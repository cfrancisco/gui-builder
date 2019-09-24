import PropTypes from 'prop-types';
import intl from 'react-intl-universal';
import ptBR from './locales/pt-BR.json';
import enUS from './locales/en-US.json';

const i18nProvider = ({ term }) => {
    const locales = {
        'pt-BR': ptBR,
        'en-US': enUS,
    };

    const currentLocaleArray = window.location.href.split('/');
    const currentLocale = currentLocaleArray[currentLocaleArray.length - 1] === 'en' ? 'en-US' : 'pt-BR';

    // const localeArray = JSON.parse(JSON.stringify(ptBR));
    const keys = Object.keys(ptBR);
    console.log(keys);

    intl.init({
        currentLocale,
        locales,
    });

    return intl.getHTML(term).d('Esta tradução não existe');
};

i18nProvider.propTypes = {
    term: PropTypes.string.isRequired,
};

export default i18nProvider;
