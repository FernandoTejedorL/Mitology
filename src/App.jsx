import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';
import { GlobalStyles } from './styles/GlobalStyles';
import Header from './components/header/Header';

const App = () => {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<Header />
			<Router />
		</BrowserRouter>
	);
};

export default App;
