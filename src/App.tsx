import Yakumo from "./components/Yakumo/Yakumo";
import { appStyle } from "./styles/app.css";

const App: React.FC = () => {
	return (
		<>
			<div className={appStyle}>
				<Yakumo />
			</div>
		</>
	);
};

export default App;
