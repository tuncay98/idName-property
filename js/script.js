var y= document.querySelector("div");
Object.defineProperty(Object.prototype, 'idName', {
	set : function(value) {
		if(typeof this.tagName !== 'undefined') {
			this.id = value;
		}
	}
});
