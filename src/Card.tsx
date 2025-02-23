import { useRef, useState } from "react";
import { css } from "../styled-system/css";

type Position = {
	x: number;
	y: number;
};

export const Card = () => {
	const divRef = useRef<HTMLDivElement | null>(null);
	const [rotation, setRotation] = useState<Position>({ x: 0, y: 0 });

	return (
		<div
			className={css({
				width: 400,
				height: 400,
				perspective: 1000,
			})}
		>
			<div
				ref={divRef}
				onMouseMove={handlePointerMove}
				onMouseLeave={handlePointerLeave}
				className={css({
					cursor: "pointer",
					transition: "all .5s",
					transformStyle: "preserve-3d",
					transform: `rotateX(${rotation.y}deg) rotateY(${rotation.x}deg)`,
					borderRadius: "xl",
					overflow: "hidden",
					position: "relative",
					display: "block",
				})}
			>
				<img
					src="/public/snd.png"
					className="card image"
					width="400"
					height="400"
				/>
			</div>
		</div>
	);
};
