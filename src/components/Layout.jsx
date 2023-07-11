import { Outlet } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
import AppBar from './appBar/AppBar';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      {/* <Toaster /> */}
    </div>
  );
};

export default Layout;
