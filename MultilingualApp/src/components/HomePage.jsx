import { useContext } from 'react';
import { LanguageContext } from "../contexts/LanguageContext"
import translations from '../translations';

const HomePage = () => {
    const { language } = useContext(LanguageContext);

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ fontSize: '2em' }}>{translations[language].home}</h1>
            <p style={{ fontSize: '1.2em' }}>{translations[language].welcome}</p>
            <p style={{ fontSize: '1.2em' }}>{translations[language].intro}</p>
            <p style={{ fontSize: '1.2em' }}>{translations[language].content}</p>
        </div>
    );
};

export default HomePage;