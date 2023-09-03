import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import css from './SharedLayout.module.css';
import Loader from 'components/Loader/Loader';
import Header from 'components/Header/Header';

const SharedLayout = () => {
  return (
    <div className={css.page}>
      <Header />
      <main>
        <div className={css.container}>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </div>
  );
};

export default SharedLayout;
