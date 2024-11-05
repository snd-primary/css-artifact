import Yakumo from "./components/Yakumo/Yakumo";
import { css } from "../styled-system/css";

const App: React.FC = () => {
	return (
		<div
			className={css({
				display: "grid",
				placeItems: "center",
				placeContent: "center",
				gridTemplateColumns: "1fr",
				w: "full",
				h: "100vh",
				border: `1px solid #ffffff`,
			})}
		>
			<Yakumo />
		</div>
	);
};

export default App;
