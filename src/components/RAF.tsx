import { css } from "../../styled-system/css";
import { useEffect, useRef, useState } from "react";

type Position = {
	x: number;
	y: number;
};

export const RAF = () => {
	const isPointerMoving = useRef<boolean>(false);
	const rafIdRef = useRef<number>(0);
	const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

	const updatePosition = (e: PointerEvent) => {
		return setPosition({
			x: e.clientX,
			y: e.clientY,
		});
	};

	const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
		if (!isPointerMoving.current) {
			isPointerMoving.current = true;
			rafIdRef.current = requestAnimationFrame(() => {
				updatePosition(e.nativeEvent);
				isPointerMoving.current = false;
			});
		}
	};
	//クリーンアップ
	useEffect(() => {
		return () => {
			isPointerMoving.current = false;
			if (rafIdRef.current) {
				cancelAnimationFrame(rafIdRef.current);
			}
		};
	}, []);

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
