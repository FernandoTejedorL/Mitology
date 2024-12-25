import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import { MITHOLOGIES_INFO } from '../constants/mithologies-info';
import Mithology from '../pages/mithology/Mithology';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			{MITHOLOGIES_INFO.map(mithology => {
				const mithologyName = mithology.name;
				return (
					<Route
						key={mithology.id}
						path={mithology.path}
						element={<Mithology mithologyName={mithologyName} />}
					/>
				);
			})}
		</Routes>
	);
};

export default Router;
