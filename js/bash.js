let timer = 0
let	strs = ['./weather.sh',
			'cat ./me.txt',
			'sudo rm -rf /过去的自己/*',
			'open -n /System/Applications/Utilities/Terminal.app',
			'./links.sh']

function typing(flag, i) {

	var spanId = "cmd" + (flag + 1)
	let inputObject = document.getElementById(spanId)

	if (flag < strs.length && i <= strs[flag].length) {

		// 调用键盘音效
		//keyboardSound()
		inputObject.innerHTML = strs[flag].slice(0, i++) + '_'
		timer = setTimeout(typing, 75, flag, i)

	} else if(flag < strs.length && i > strs[flag].length) {

		inputObject.innerHTML = strs[flag] //结束打字,移除 _ 光标
		if (flag == 0) {
			showElement(1)
			showElement(2)
		} else if (flag == 1) {
			showElement(3)
			showElement(4)
		} else if (flag == 2) {
			showElement(5)
		} else if (flag == 3) {
			setTimeout(showElement, 200, 6)
		} else if (flag == 4) {
			showElement(7)
		}

		clearTimeout(timer)
		setTimeout(typing, 500, flag + 1, 0)
		i = 0
	}
}

/* 
 * 显示页面中隐藏的元素 
 */
function showElement(hid) {
	var hidStr = "hid" + hid
	let hidObject = document.getElementById(hidStr);
	hidObject.removeAttribute("hidden");
}

// 键盘音效
function keyboardSound() {
	var audio = new Audio('./music/keydown.mp3');
	audio.play();
}

typing(0, 0)
