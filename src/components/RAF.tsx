import { css } from "../../styled-system/css";
import { usePointerMove } from "../hooks/usePointerMove";
export const RAF = () => {
	const { handlePointerMove, position } = usePointerMove();

	return (
		<div
			onPointerMove={handlePointerMove}
			className={css({
				display: "block",
				w: "full",
				h: "800px",
				background: "slate.300",
			})}
		>
			{position.x}
		</div>
	);
};
