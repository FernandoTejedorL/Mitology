import { Route, Routes } from 'react-router-dom';
import { MITHOLOGIES_INFO } from '../constants/mithologies-info';
import Home from '../pages/home/Home';
import Mithology from '../pages/mithology/Mithology';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			{MITHOLOGIES_INFO.map(mithology => {
				const mithologyInfo = mithology.info;
				return (
					<Route
						key={mithology.id}
						path={mithology.path}
						element={<Mithology mithologyInfo={mithologyInfo} />}
					/>
				);
			})}
		</Routes>
	);
};

export default Router;
