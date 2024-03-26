import React from "react";

const LanguageContext = React.createContext();

// eslint-disable-next-line react/prop-types
const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = React.useState("en"); //Default Langugage

    const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage);
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export { LanguageProvider, LanguageContext }