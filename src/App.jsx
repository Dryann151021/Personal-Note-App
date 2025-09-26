import React from 'react';
import { Routes, Route, Link, Navigate, useNavigate, } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArchivePage from './pages/ArchivePage';
import DetailPageWrapper from './pages/DetailPage';
import AddNote from './pages/AddNote';
import NotFoundPage from './pages/NotFoundPage';
import content from './contexts/content';
import { getUserLogged, putAccessToken } from './utils/network-data';
import Navigation from './components/Navigation';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { MdLogout } from 'react-icons/md';

function App() {
  const [authedUser, setAuthedUser] = React.useState(null);
  const [initializing, setInitializing] = React.useState(true);
  const [locale, setLocale] = React.useState(localStorage.getItem('locale') || 'id');
  const [theme, setTheme] = React.useState(localStorage.getItem('theme') || 'light');
  
  const toggleLocale = () => {
    setLocale((prevLocale) => {
      const newLocale = prevLocale === 'id' ? 'en' : 'id';
      localStorage.setItem('locale', newLocale);
      return newLocale;
    })
  }

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  React.useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        setInitializing(false);
        return;
      }

      const { data, error } = await getUserLogged();
      if (!error) {
        setAuthedUser(data)
      }
      setInitializing(false);
    };

    fetchUserData();
  }, []);

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  
  const contextValue = React.useMemo(() => { 
    return {
      locale,
      theme,
      toggleLocale,
      toggleTheme,
    }
  }, [locale, theme]);

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
  }

  const onLogout = () => {
    setAuthedUser(null);
    putAccessToken("");
  };

  if (initializing === true) {
    return null
  }

  if (authedUser === null) {
    return(
      <content.Provider value={contextValue}>
        <div className='app-container'>
          <header>
            <img  className='note-logos' src='/images/note-logo.png' alt='note-logos' />
            <h1>
              <Link to={'/'}>{locale === 'id' ? 'Aplikasi Catatan' : 'Note App'}</Link>
            </h1>
            <Navigation />
          </header>
          <main>
            <Routes>
              <Route path='/' element={<LoginPage loginSuccess={onLoginSuccess}/>} />
              <Route path='/register' element={<RegisterPage />} />
            </Routes>
          </main>
        </div>
      </content.Provider>
    )
  }

  return(
    <content.Provider value={contextValue}>
      <div className='app-container'>
        <header>
          <img className='note-logos' src='/images/note-logo.png' alt='note-logos' />
          <h1>
            <Link to={'/'}>{locale === 'id' ? 'Aplikasi Catatan' : 'Note App'}</Link>
          </h1>
          <nav className='navigation'>
            <ul>
              <li>
                <Link to='/archive'>{locale === 'id' ? 'Arsip' : 'Archive'}</Link>
              </li>
            </ul>
          </nav>
          <Navigation />
          <button className='button-logout'onClick={onLogout}>
            <MdLogout />{authedUser.name}
          </button>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/notes/new' element={<AddNote />} />
            <Route path='/notes/:id' element={<DetailPageWrapper />} />
            <Route path='/archive' element={<ArchivePage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
       </main>
      </div>
    </content.Provider>
  )
}

export default App;