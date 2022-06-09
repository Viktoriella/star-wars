// import cn from 'classnames';
import { Routes, Route } from 'react-router-dom';
import routesConfig from '@routes/routesConfig';
import Header from '@components/Header';

import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.wrapper}>
        <Header />

        <Routes> 
          {routesConfig.map((route, index) => (
            <Route
                key={index}
                path={route.path}
                element={route.element}
            />
          ))}
        </Routes>
    </div>
  )
}

export default App;

/* <NavLink to="/" exact="true">Home</NavLink>
<NavLink to="/people" exact="true">People</NavLink> */