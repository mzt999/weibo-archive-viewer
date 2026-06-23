var alphabet = "abcdefghijklmnopqrstuvwxyz";
function zoompic(arr) {
	var d = document;
	var imgObj = {};
	d.querySelector("#mask_child").onclick = function () {
		d.querySelector("#mask_layer").className = "fade-out-anime";
	};
	for (let j = 0; j < arr.length; j++) {
		let isElementArr = arr[j][2];
		if (!isElementArr) {
			zoom1(arr[j][0], arr[j][1], j);
		} else {
			let units = d.querySelectorAll(arr[j][0]);
			for (let m = 0; m < units.length; m++) {
				zoom2(units[m], arr[j][1], j + alphabet[m], arr[j][3]);
			}
		}
	}
	function zoom1(selector, isImg, groupIndex) {
		var nodes = d.querySelectorAll(selector);
		if (nodes.length < 2) {
			d.querySelector(".arrow.arrow-left").style.display = "none";
			d.querySelector(".arrow.arrow-right").style.display = "none";
		}
		for (let i = 0; i < nodes.length; i++) {
			let parent = nodes[i].parentNode;
			let grandParent = parent.parentNode;
			if (parent.nodeName != "A" && grandParent.nodeName != "A") {
				nodes[i].className = nodes[i].className + " zoomable";
				nodes[i].setAttribute("data-zoom-group-index", groupIndex + "-" + i);
				if (isImg) {
					imgObj[groupIndex + "-" + i] = nodes[i].src;
				} else {
					imgObj[groupIndex + "-" + i] = nodes[i].style.backgroundImage;
				}
				nodes[i].onclick = function () {
					d.querySelector(".arrow.arrow-left").setAttribute(
						"data-zoom-group-index",
						this.getAttribute("data-zoom-group-index")
					);
					d.querySelector(".arrow.arrow-right").setAttribute(
						"data-zoom-group-index",
						this.getAttribute("data-zoom-group-index")
					);
					if (isImg) {
						d.querySelector("#mask_child img").src = "https://wx4.sinaimg.cn/mw690/" + this.src.split("/").pop();
					} else {
						d.querySelector("#mask_child img").src = this.style.backgroundImage;
					}
					d.querySelector("#mask_layer").className = "fade-in-anime";
					d.querySelector("#mask_child").scrollTo(0,0);
				};
			}
		}
	}
	function zoom2(parentNode, isImg, groupIndex, childSelector) {
		var nodes = parentNode.querySelectorAll(childSelector);
		for (let i = 0; i < nodes.length; i++) {
			let parent = nodes[i].parentNode;
			let grandParent = parent.parentNode;
			if (parent.nodeName != "A" && grandParent.nodeName != "A") {
				nodes[i].className = nodes[i].className + " zoomable";
				nodes[i].setAttribute("data-zoom-group-index", groupIndex + "-" + i);
				if (isImg) {
					imgObj[groupIndex + "-" + i] = "https://wx4.sinaimg.cn/mw690/" + nodes[i].src.split("/").pop();
				} else {
					imgObj[groupIndex + "-" + i] = nodes[i].style.backgroundImage;
				}
				nodes[i].onclick = function () {
					if (nodes.length < 2) {
						d.querySelector(".arrow.arrow-left").style.display = "none";
						d.querySelector(".arrow.arrow-right").style.display = "none";
					} else {
						if (i) {
							d.querySelector(".arrow.arrow-left").style.display = "block";
						} else {
							d.querySelector(".arrow.arrow-left").style.display = "none";
						}
						if (i<nodes.length-1) {
							d.querySelector(".arrow.arrow-right").style.display = "block";
						} else {
							d.querySelector(".arrow.arrow-right").style.display = "none";
						}
					}
					d.querySelector(".arrow.arrow-left").setAttribute(
						"data-zoom-group-index",
						this.getAttribute("data-zoom-group-index")
					);
					d.querySelector(".arrow.arrow-right").setAttribute(
						"data-zoom-group-index",
						this.getAttribute("data-zoom-group-index")
					);
					if (isImg) {
						d.querySelector("#mask_child img").src = "https://wx4.sinaimg.cn/mw690/" + this.src.split("/").pop();
					} else {
						d.querySelector("#mask_child img").src = this.style.backgroundImage;
					}
					d.querySelector("#mask_layer").className = "fade-in-anime";
					d.querySelector("#mask_child").scrollTo(0,0);
				};
			}
		}
	}
	d.querySelector(".arrow.arrow-left").onclick = function () {
		d.querySelector(".arrow.arrow-right").style.display = "block";
		var indexStr = this.getAttribute("data-zoom-group-index");
		var indexArr = indexStr.split("-");
		if (imgObj[indexArr[0] + "-" + (indexArr[1] - 1)]) {
			if (!imgObj[indexArr[0] + "-" + (indexArr[1] - 2)]) {
				d.querySelector(".arrow.arrow-left").style.display = "none";
			}
			d.querySelector("#mask_child img").src = imgObj[indexArr[0] + "-" + (indexArr[1] - 1)];
			d.querySelector(".arrow.arrow-left").setAttribute(
				"data-zoom-group-index",
				indexArr[0] + "-" + (indexArr[1] - 1)
			);
			d.querySelector(".arrow.arrow-right").setAttribute(
				"data-zoom-group-index",
				indexArr[0] + "-" + (indexArr[1] - 1)
			);
			d.querySelector("#mask_child").scrollTo(0,0);
		}
	};
	d.querySelector(".arrow.arrow-right").onclick = function () {
		d.querySelector(".arrow.arrow-left").style.display = "block";
		var indexStr = this.getAttribute("data-zoom-group-index");
		var indexArr = indexStr.split("-");
		if (imgObj[indexArr[0] + "-" + (Number(indexArr[1]) + 1)]) {
			if (!imgObj[indexArr[0] + "-" + (Number(indexArr[1]) + 2)]) {
				d.querySelector(".arrow.arrow-right").style.display = "none";
			}
			d.querySelector("#mask_child img").src = imgObj[indexArr[0] + "-" + (Number(indexArr[1]) + 1)];
			d.querySelector(".arrow.arrow-left").setAttribute(
				"data-zoom-group-index",
				indexArr[0] + "-" + (Number(indexArr[1]) + 1)
			);
			d.querySelector(".arrow.arrow-right").setAttribute(
				"data-zoom-group-index",
				indexArr[0] + "-" + (Number(indexArr[1]) + 1)
			);
			d.querySelector("#mask_child").scrollTo(0,0);
		}
	};
}
// module.exports = zoompic;

export default zoompic;
