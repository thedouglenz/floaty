/*
	Douglas Lenz, June 2014
	Floaty is a div type extension custom element
*/

var floatyPrototype = Object.create(HTMLDivElement.prototype);


floatyPrototype.createdCallback = function() {
	if(this.innerHTML == "") {
		this.innerHTML = "Empty Floaty!";
	}
	this.style.border = "1px solid red";
	this.style.padding = "5px";
	this.style.display = 'inline';
	this.style.position = 'absolute';
	this.style.zIndex = 100;
	this.style.visibility = 'hidden';

	var that = this;
	this.addEventListener('drag', function(e) {
		console.log('This dragged.');
		console.log(e.clientX + e.clientY);
		that.style.top = e.clientY;
		that.style.left = e.clientX;
	});
};

floatyPrototype.attachedCallback = function() {
	this.style.visibility = 'visible';
	//this.fallDown();
};

floatyPrototype.detachedCallback = function() {

};

floatyPrototype.fallDown = function() {
	console.log($(this).outerHeight());
	var fallLength = $(window).height() - $(this).outerHeight();
	//this.style.top = 0;
	$(this).animate({top: "+=" + fallLength}, 2500, function() { console.log('fallDown complete');});
};

var Floaty = document.registerElement('float-y',
{
	prototype: floatyPrototype,
	extends: 'div'
});

(jQuery);
