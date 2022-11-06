import MainScreen from '../../pages/main-screen/main-screen';

type MainScreenProps = {
  rentalOffers: number;
}

function App({ rentalOffers }: MainScreenProps): JSX.Element {
  return <MainScreen rentalOffers={rentalOffers} />;
}

export default App;
