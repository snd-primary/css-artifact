import { useEffect, useRef } from "react";

export interface AnimationConfig {
	perspective: number;
	rotationFactor: number;
	duration: number;
	easing: string;
}

export const useCardAnimation = (config: AnimationConfig) => {
	const elementRef = useRef<HTMLDivElement>(null);
	const animationRef = useRef<Animation | null>(null);
	const isPointerDownRef = useRef(false);

	useEffect(() => {
		const cardEl = elementRef.current;
		if (!cardEl) return;

		const getTransformKeyframe = (
			xRotation: number,
			yRotation: number
		): Keyframe[] => [
			{
				transform: `perspective(${config.perspective}px) scale(1) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`,
			},
		];

		const createAnimation = (keyframes: Keyframe[]): Animation => {
			// animationRef.current?.cancel();

			const animation = cardEl.animate(keyframes, {
				duration: config.duration,
				fill: "forwards",
				easing: config.easing,
			});

			animationRef.current = animation;
			return animation;
		};

		const handlePointerMove = (e: PointerEvent) => {
			// タッチスクロール中は処理をスキップ
			if (e.pointerType === "touch" && !isPointerDownRef.current) return;

			const rect = cardEl.getBoundingClientRect();
			const xVal = e.clientX - rect.left;
			const yVal = e.clientY - rect.top;

			const yRotation =
				config.rotationFactor * ((xVal - rect.width / 2) / rect.width);
			const xRotation =
				config.rotationFactor * ((yVal - rect.height / 2) / rect.height);

			// requestAnimationFrameを使用してアニメーションを最適化
			requestAnimationFrame(() => {
				createAnimation(getTransformKeyframe(xRotation, yRotation));
			});
		};

		const handlePointerLeave = () => {
			createAnimation(getTransformKeyframe(0, 0));
		};

		const handlePointerDown = () => {
			isPointerDownRef.current = true;
		};

		const handlePointerUp = () => {
			isPointerDownRef.current = false;
		};

		// pointer eventsの登録
		cardEl.addEventListener("pointermove", handlePointerMove, { passive: true });
		cardEl.addEventListener("pointerleave", handlePointerLeave);
		cardEl.addEventListener("pointerdown", handlePointerDown);
		cardEl.addEventListener("pointerup", handlePointerUp);

		return () => {
			cardEl.removeEventListener("pointermove", handlePointerMove);
			cardEl.removeEventListener("pointerleave", handlePointerLeave);
			cardEl.removeEventListener("pointerdown", handlePointerDown);
			cardEl.removeEventListener("pointerup", handlePointerUp);
			animationRef.current?.cancel();
		};
	}, [config]);

	return elementRef;
};
