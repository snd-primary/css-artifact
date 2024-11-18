const card = document.querySelector(".card");

function handleHover(e) {
	const rect = card.getBoundingClientRect();

	//clientX -> VW（画面左端）からの、マウスカーソルのX座標を計算
	//clienty -> VW（画面上端）からの、マウスカーソルのY座標を計算
	// rect.left → VW（画面左端）と、要素の左端の距離を計算
	// rect.left → VW（画面上端） と、要素の上端の距離を計算
	// x → マウス座標から、常に要素とVWの隙間の距離が引かれることになる。そうすると、要素の大きさ分の座標位置が返ってくる。

	//対象のDOMの左端上を起点にした座標を取得
	const x = e.clientX - rect.left;
	const y = e.clientY - rect.top;

	const centerX = rect.width / 2;
	const centerY = rect.height / 2;

	const sensitivity = e.pointerType === "pen" ? 20 : 10;
	const rotateX = Math.max(-20, Math.min(20, y - centerY) / sensitivity);
	const rotateY = Math.max(-20, Math.min(20, centerX - x) / sensitivity);

	card.style.transform = `
		perspective(1000px)
		rotateX(${rotateX}deg)
		rotateY(${rotateY}deg)
	`;
}

function resetCard() {
	card.style.transform = `rotateX(0) rotateY(0)`;
}

card.addEventListener("pointermove", handleHover);
card.addEventListener("pointerleave", resetCard);
