import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import RoomScreen from '../../pages/room-screen/room-screen';
import PageNotExist from '../../pages/page-not-exist-screen/page-not-exist-screen';

type MainScreenProps = {
  rentalOffers: number;
}

function App({ rentalOffers }: MainScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<MainScreen rentalOffers={rentalOffers} />}
        />

        <Route
          path='/login'
          element={<LoginScreen />}
        />

        <Route
          path='/offer/:id'
          element={<RoomScreen />}
        />

        <Route
          path='*'
          element={<PageNotExist />}
        />
      </Routes>
    </BrowserRouter>);
}

export default App;
