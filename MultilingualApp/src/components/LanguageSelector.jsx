import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import translations from '../translations';

const LanguageSelector = () => {
    const { changeLanguage, language } = useContext(LanguageContext);
    console.log();
    return (
        <>
            <label htmlFor="language" style={{ fontSize: '1.2em', marginRight: '10px' }}>{translations[language].selectLanguage} </label>
            <select 
                value={language} 
                onChange={(e) => changeLanguage(e.target.value)}
                style={{ padding: '5px', fontSize: '1em' }}
            >
                {
                    Object.keys(translations).map((lang) => (
                        <option key={lang} value={lang}>
                            {lang}
                        </option>
                    ))
                }
            </select>
        </>
    );
};

export default LanguageSelector;