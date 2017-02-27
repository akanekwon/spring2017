/*global $,jQuery,document,window:false */
console.log("コンソールログ");
var main = document.getElementsByClassName("main");

main[0].insertAdjacentHTML("afterbegin", "<p>Learning JavaScript</p>");

(function sample() {
	console.log("これはJavaScriptのサンプルです。");
})();

var Cat = function(name) {
	this.name = name;
};
Cat.prototype.run = function() {
	console.log(this.name + "が走る。");
};

var tama = new Cat("タマ");
tama.run();
console.log(tama.name);
