import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './styles.scss';
import 'react-toastify/dist/ReactToastify.min.css';
import 'tailwindcss/tailwind.css';
import { IntlProvider } from 'react-intl';
import Spanish from './lang/es.json';
import English from './lang/en.json';
import { HomePage } from './pages/home';
// @ts-ignore
const root = createRoot(document.getElementById('root') as HTMLElement);

const locale = navigator.language;
const langMap: { [key: string]: any } = {
  es: Spanish,
  en: English,
};
let messages = langMap[locale];
messages = messages === undefined ? Spanish : messages;
root.render(
  <React.StrictMode>
    <IntlProvider locale={locale} messages={messages}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </IntlProvider>
  </React.StrictMode>,
);
reportWebVitals();
