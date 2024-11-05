/* このhookは没！！！！！*/

import { useEffect, useRef } from "react";

interface AnimationConfig {
	perspective: number;
	rotationFactor: number;
	duration: number;
	easing: string;
}

export const usePersepectiveCardAnimation = (config: AnimationConfig) => {
	const elementRef = useRef<HTMLDivElement>(null);
	const animationRef = useRef<Animation | null>(null);

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
			// 既存のアニメーションをキャンセル

			const animation = cardEl.animate(keyframes, {
				duration: config.duration,
				fill: "forwards",
				easing: config.easing,
			});

			animationRef.current = animation;
			return animation;
		};

		const handleMove = (e: MouseEvent) => {
			// getBoundingClientRectを使用してより正確な位置を取得
			const rect = cardEl.getBoundingClientRect();
			const xVal = e.clientX - rect.left;
			const yVal = e.clientY - rect.top;

			// 回転の計算
			const yRotation =
				config.rotationFactor * ((xVal - rect.width / 2) / rect.width);
			const xRotation =
				config.rotationFactor * ((yVal - rect.height / 2) / rect.height);

			// アニメーションの作成と実行
			createAnimation(getTransformKeyframe(xRotation, yRotation));
		};

		const handleMouseOut = () => {
			console.log("mouseout called");
			createAnimation(getTransformKeyframe(0, 0));
		};

		// デバウンスされたイベントハンドラーの作成
		const debouncedHandleMove = debounce(handleMove, 16); // ≈60fps

		// イベントリスナーの追加
		cardEl.addEventListener("mousemove", debouncedHandleMove);
		cardEl.addEventListener("mouseout", handleMouseOut);

		// クリーンアップ関数
		return () => {
			cardEl.removeEventListener("mousemove", debouncedHandleMove);
			cardEl.removeEventListener("mouseout", handleMouseOut);
			animationRef.current?.cancel();
		};
	}, [config]); // configを依存配列に追加

	return elementRef;
};

// デバウンス関数の実装（ラッパー関数）
function debounce<T extends (...args: any[]) => any>(
	func: T,
	wait: number
): (...args: Parameters<T>) => void {
	let timeout: NodeJS.Timeout | null = null;

	return (...args: Parameters<T>) => {
		if (timeout) {
			clearTimeout(timeout);
		}
		timeout = setTimeout(() => {
			func(...args);
		}, wait);
	};
}

/* 	useEffect(() => {
		const cardEl = yakumocardEl.current;
		if (!cardEl) return;

		//要素の領域を取得
		const width = cardEl.clientWidth;
		const height = cardEl.clientHeight;

		const pSize = 900;

		const animationOptions: AnimationOptions = {
			duration: 10,
			delay: 5000,
			fill: "forwards",
			easing: "ease-out",
		};

		const getKeyframes = (transform: string): Keyframe[] => [
			{
				transform,
			},
		];

		const handleMove = (e: MouseEvent) => {
			//マウスカーソルの座標を取得
			const xVal = Math.round(e.offsetX);
			const yVal = Math.round(e.offsetY);

			//mousemove時の変化量を定義
			const yRotation = 10 * ((xVal - width / 2) / width);
			const xRotation = 10 * ((yVal - height / 2) / height);

			cardEl.animate(
				getKeyframes(
					`perspective(${pSize}px) scale(1) rotateX(${xRotation}deg) rotateY( ${yRotation}deg)`
				),
				animationOptions
			);
		};

		const handleMouseOut = () => {
			cardEl.animate(
				getKeyframes(`perspective(${pSize}px) scale(1) rotateX(0) rotateY(0)`),
				animationOptions
			);
		};

		cardEl.addEventListener("mousemove", handleMove);
		cardEl.addEventListener("mouseout", handleMouseOut);
	}, []); */
