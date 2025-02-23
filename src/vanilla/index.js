const card = document.querySelector(".card");

function handleHover(e) {
	const cardRect = card.getBoundingClientRect();

	//カードの左端上を起点にした座標を取得
	const x = e.clientX - cardRect.left;
	const y = e.clientY - cardRect.top;

	//カードの中心座標を取得
	const centerX = cardRect.width / 2;
	const centerY = cardRect.height / 2;

	console.log(centerX);

	const sensitivity = e.pointerType === "pen" ? 20 : 10;

	const rotateX = Math.max(-20, Math.min(20, y - centerY) / sensitivity);
	const rotateY = Math.max(-20, Math.min(20, centerX - x) / sensitivity);

	const scale = e.pointerType === "pen" ? 1 + e.pressure * 0.1 : 1.05;

	card.style.transform = `
		perspective(1200px)
		rotateX(${rotateX}deg)
		rotateY(${rotateY}deg)
    scale3d(${scale}, ${scale}, ${scale})
	`;
}

function resetCard() {
	card.style.transform = `rotateX(0) rotateY(0)`;
}

card.addEventListener("pointermove", handleHover);
card.addEventListener("pointerleave", resetCard);
