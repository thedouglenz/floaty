/*
	Douglas Lenz, June 2014
	Floaty is a div type extension custom element
*/

var floatyPrototype = Object.create(HTMLDivElement.prototype);


floatyPrototype.createdCallback = function() {

};

floatyPrototype.attachedCallback = function() {
	
};

floatyPrototype.detachedCallback = function() {

};

var Floaty = document.registerElement('flo-t',
{
	prototype: floatyPrototype,
	extends: 'div'
});


