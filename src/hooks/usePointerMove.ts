import { useRef, useState, useEffect } from "react";

type Position = {
	x: number;
	y: number;
};

export const usePointerMove = () => {
	const isPointerMoving = useRef<boolean>(false);
	const rafIdRef = useRef<number>(0);
	const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

	//
	const createPosition = () => {};

	const updatePosition = (e: PointerEvent) => {
		return setPosition({
			x: Math.round(e.offsetX),
			y: Math.round(e.offsetY),
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

	return { position, handlePointerMove };
};
