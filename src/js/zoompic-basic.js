var styleContent = `
.zoomable {
	cursor: zoom-in;
}
#mask_layer {
	position: fixed;
	top: 0px;
	left: 0px;
	right: 0px;
	bottom: 0px;
	width: 100%;
	height: 100%;
	text-align: center;
	background: rgba(0, 0, 0, .5);
}
#mask_child {
	position: absolute;
	top: 0px;
	left: 0px;
	right: 0px;
	bottom: 0px;
	margin: auto;
	text-align: center;
	cursor: zoom-out;
	overflow-y: scroll;
}
#mask_child img {
	object-fit: contain;
  width: 100%;
  height: 100%;
}
#mask_layer .arrow {
  position: absolute;
  top: 50%;
  left: 0px;
  right: 0px;
  width: 48px;
  border: 1px solid white;
  font-size: 24px;
  color: white;
  text-align: center;
  line-height: 50px;
  vertical-align: top;
  background: rgba(0,0,0,0.5);
  transform: translateY(-25px);
  user-select: none;
  cursor: pointer;
}
#mask_layer .arrow:hover {
  opacity: 0.7;
}
#mask_layer .arrow-left {
  left: 0px;
  right: auto;
  border-left: black;
}
#mask_layer .arrow-right {
  left: auto;
  right: 0px;
  border-right: black;
}
.hidden {
	display: none;
}
.fade-in-anime {
	animation: fade-in 0.5s;
  	z-index: 2;
}
.fade-out-anime {
	animation: fade-out 0.5s;
	animation-fill-mode: forwards;
}
@keyframes fade-in {
  from {
  	opacity: 0;
  	z-index: 2;
  }
  to {
  	opacity: 1;
  	z-index: 2;
  }
}
@keyframes fade-out {
  0% {
  	opacity: 1;
  	z-index: 2;
  }
  99% {
  	opacity: 0;
  	z-index: 2;
  }
  100% {
  	opacity: 0;
  	z-index: -1;
  }
}
`;
function zoompicBasic() {
	var d = document;
	var maskStyle = d.createElement("style");
	var maskDom = d.createElement("div");
	maskDom.id = "mask_layer";
	maskDom.className = "hidden";
	maskDom.innerHTML = `<div id="mask_child"><img src=""/></div><div class="arrow arrow-left">&lt;</div><div class="arrow arrow-right">&gt;</div>`;
	maskStyle.innerHTML = styleContent;
	d.querySelector("head").appendChild(maskStyle);
	d.querySelector("body").appendChild(maskDom);
}
// module.exports = zoompic;

export default zoompicBasic;
