// import Yakumo from "./components/Yakumo/Yakumo";
import { css } from "../styled-system/css";
import NoobRaf from "./components/NoobRaf";
import { RAF } from "./components/RAF";

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
			{/* <Yakumo /> */}
			<RAF />
			{/* <NoobRaf /> */}
		</div>
	);
};

export default App;
