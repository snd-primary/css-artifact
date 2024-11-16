import React, { useRef, useState } from "react";
import { css } from "../../styled-system/css";

type Position = {
	x: number;
	y: number;
};

const NoobRaf = () => {
	const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
	const renderCount = useRef<number>(0);

	console.log(renderCount.current++);

	const handlePointerMove = (event: React.PointerEvent) => {
		setPosition({
			x: event.clientX,
			y: event.clientY,
		});
	};

	return (
		<div
			onPointerMove={handlePointerMove}
			className={css({
				display: "block",
				w: "full",
				h: "800px",
				background: "red.200",
			})}
		>
			{position.x}
		</div>
	);
};

export default NoobRaf;
