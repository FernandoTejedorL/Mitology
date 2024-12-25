import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';
import { GlobalStyles } from './styles/GlobalStyles';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const App = () => {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<Header />
			<Router />
			<Footer />
		</BrowserRouter>
	);
};

export default App;
