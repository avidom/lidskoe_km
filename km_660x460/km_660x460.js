(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 660,
	height: 460,
	fps: 30,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/bok1.png", id:"bok1"},
		{src:"images/bok2.png", id:"bok2"},
		{src:"images/bok3.png", id:"bok3"},
		{src:"images/bok4.png", id:"bok4"},
		{src:"images/bottle.png", id:"bottle"},
		{src:"images/light.png", id:"light"},
		{src:"images/light2.png", id:"light2"},
		{src:"images/RoundedRectangle1.png", id:"RoundedRectangle1"},
		{src:"images/t1.png", id:"t1"},
		{src:"images/t2.png", id:"t2"},
		{src:"images/t3.png", id:"t3"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,660,460);


(lib.bok1 = function() {
	this.initialize(img.bok1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,176);


(lib.bok2 = function() {
	this.initialize(img.bok2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,121,158);


(lib.bok3 = function() {
	this.initialize(img.bok3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,180);


(lib.bok4 = function() {
	this.initialize(img.bok4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,86,150);


(lib.bottle = function() {
	this.initialize(img.bottle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,202,400);


(lib.light = function() {
	this.initialize(img.light);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,400);


(lib.light2 = function() {
	this.initialize(img.light2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,275,336);


(lib.RoundedRectangle1 = function() {
	this.initialize(img.RoundedRectangle1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,208,56);


(lib.t1 = function() {
	this.initialize(img.t1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,151,33);


(lib.t2 = function() {
	this.initialize(img.t2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,33);


(lib.t3 = function() {
	this.initialize(img.t3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,34);


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgVCMIAAheIg3i5IAuAAIAgCAIAhiAIAqAAIg4C5IAABeg");
	this.shape.setTransform(80.6,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhDCMIAAkXIBDAAQAgAAAQAQQAPAQAAAhIAAAKQAAAWgGAOQgHANgQAHQATAHAHANQAHAQAAAWIAAAXQAAAggRASQgQARghAAgAgWBjIAXAAQALABAGgHQAFgFAAgQIAAgZQAAgTgGgHQgHgIgNABIgTAAgAgWgZIARAAQAKAAAHgGQAHgGAAgRIAAgQQAAgPgGgGQgEgIgKABIgVAAg");
	this.shape_1.setTransform(64.9,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUAVIAAgpIApAAIAAApg");
	this.shape_2.setTransform(52.7,12.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAXCMIgBgGIgCgGIAAgJIgBgOIAAgsQAAgUgGgHQgHgJgOABIgPAAIAAByIgsAAIAAkXIBDAAQAgAAAPAQQAQAQAAAhIAAAWQAAArgdAMQARAGAGAQQAGAPAAAWIAAAsIABASQABAHADAJgAgXgNIARAAQALABAHgHQAHgGAAgRIAAgcQAAgPgGgGQgFgIgJABIgWAAg");
	this.shape_3.setTransform(41.3,0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag7CMIAAkXIB2AAIAAApIhJAAIAABOIA6AAIAAAmIg6AAIAABRIBJAAIAAApg");
	this.shape_4.setTransform(25.8,0.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag6CMIAAkXIB2AAIAAApIhKAAIAABOIA6AAIAAAmIg6AAIAABRIBKAAIAAApg");
	this.shape_5.setTransform(11.1,0.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhDCMIAAkXIBDAAQAhAAAOAQQAQAQAAAhIAAAKQAAAWgGAOQgIANgOAHQARAHAIANQAHAQAAAWIAAAXQABAggSASQgQARghAAgAgXBjIAYAAQALABAGgHQAFgFAAgQIAAgZQABgTgHgHQgHgIgNABIgUAAgAgXgZIASAAQAKAAAHgGQAHgGAAgRIAAgQQAAgPgGgGQgEgIgKABIgWAAg");
	this.shape_6.setTransform(-4.3,0.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgVCMIAAjuIguAAIAAgpICHAAIAAApIgvAAIAADug");
	this.shape_7.setTransform(-19.9,0.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag5CMIAAkXIBzAAIAAApIhHAAIAABUIA3AAIAAAmIg3AAIAAB0g");
	this.shape_8.setTransform(-33.3,0.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAgCMIgIgzIg0AAIgHAzIgpAAIAtkXIA+AAIAtEXgAgWAzIApAAIgUiMg");
	this.shape_9.setTransform(-48.9,0.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAXCMIgBgGIgCgGIAAgJIgBgOIAAgsQAAgUgGgHQgHgJgOABIgPAAIAAByIgsAAIAAkXIBDAAQAgAAAPAQQAQAQAAAhIAAAWQAAArgdAMQARAGAGAQQAGAPAAAWIAAAsIABASQABAHADAJgAgXgNIARAAQALABAHgHQAHgGAAgRIAAgcQAAgPgGgGQgFgIgJABIgWAAg");
	this.shape_10.setTransform(-64.7,0.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgvB9QgRgSAAgjIAAiPQAAgjARgSQAQgRAfgBQAgABARARQAQASAAAjIAAAbIgpAAIAAgeQgBgPgGgHQgGgFgKAAQgJAAgGAFQgGAHAAAPIAACVQAAAPAGAHQAGAFAJAAQAKAAAGgFQAGgHABgPIAAgoIApAAIAAAlQAAAjgQASQgRARggABQgfgBgQgRg");
	this.shape_11.setTransform(-80.8,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.RoundedRectangle1();
	this.instance.setTransform(-104,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104,-28,208,56);


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AggBMIAAiYIBBAAIAAAWIgpAAIAAArIAgAAIAAAVIggAAIAAAtIApAAIAAAVg");
	this.shape.setTransform(33.4,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeBMIAAiYIAXAAIAACDIAnAAIAAAVg");
	this.shape_1.setTransform(25.9,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AARBMIgEgbIgbAAIgFAbIgWAAIAZiYIAhAAIAZCYgAgLAcIAVAAIgKhNg");
	this.shape_2.setTransform(17.3,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLBMIAAiCIgZAAIAAgWIBJAAIAAAWIgZAAIAACCg");
	this.shape_3.setTransform(5.5,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AARBMIgEgbIgbAAIgFAbIgWAAIAZiYIAhAAIAZCYgAgLAcIAVAAIgKhNg");
	this.shape_4.setTransform(-2.9,0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgfBMIAAiYIA/AAIAAAWIgoAAIAAArIAfAAIAAAVIgfAAIAAAtIAoAAIAAAVg");
	this.shape_5.setTransform(-11.3,0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AANBMIAAhBIgaAAIAABBIgYAAIAAiYIAYAAIAABCIAaAAIAAhCIAZAAIAACYg");
	this.shape_6.setTransform(-20.2,0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAJBMIgJhPIgHBPIghAAIgRiYIAYAAIAMB4IAMh4IAWAAIALB5IANh5IAVAAIgRCYg");
	this.shape_7.setTransform(-31.1,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.4,-13.4,78.8,26.9);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAMBMIgBgCIAAgEIAAgEIgBgJIAAgYQAAgKgDgFQgFgEgGAAIgIAAIAAA+IgYAAIAAiYIAkAAQARAAAJAJQAIAJAAASIAAAMQAAAYgPAGQAJADADAIQAEAJAAAMIAAAYIAAAKIACAIgAgMgGIAJAAQAGAAADgEQAEgDAAgJIAAgQQAAgIgDgEQgDgEgEAAIgMAAg");
	this.shape.setTransform(37.2,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggBMIAAiYIBAAAIAAAWIgnAAIAAArIAeAAIAAAVIgeAAIAAAtIAnAAIAAAVg");
	this.shape_1.setTransform(28.6,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaBEQgIgKgBgSIAAhOQABgTAIgKQAKgKAQAAQARAAAJAKQAJAKAAATIAAAPIgWAAIAAgRQgBgIgDgEQgDgDgGAAQgEAAgDADQgDAEgBAIIAABRQABAJADADQADADAEAAQAGAAADgDQADgDABgJIAAgcIgLAAIAAgUIAhAAIAAAvQAAASgJAKQgJAKgRAAQgQAAgKgKg");
	this.shape_2.setTransform(20.1,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AARBMIgEgbIgbAAIgFAbIgWAAIAZiYIAhAAIAZCYgAgLAcIAVAAIgKhNg");
	this.shape_3.setTransform(11.3,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfBMIAAiYIAZAAIAACDIAlAAIAAAVg");
	this.shape_4.setTransform(3.5,0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgfBMIAAiYIBAAAIAAAWIgpAAIAAArIAgAAIAAAVIggAAIAAAtIApAAIAAAVg");
	this.shape_5.setTransform(-7.9,0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZBEQgKgKABgSIAAhOQgBgTAKgKQAJgKAQAAQARAAAKAKQAJAKAAATIAAAPIgYAAIAAgRQABgIgEgEQgDgDgGAAQgDAAgEADQgDAEAAAIIAABRQAAAJADADQAEADADAAQAGAAADgDQAEgDgBgJIAAgWIAYAAIAAAVQAAASgJAKQgKAKgRAAQgQAAgJgKg");
	this.shape_6.setTransform(-16.3,0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgLBMIAAiYIAWAAIAACYg");
	this.shape_7.setTransform(-22.7,0.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgiBMIAAiYIAiAAQARAAAJAKQAJAKAAASIAAAUQAAASgJAJQgJAKgRAAIgKAAIAAA5gAgKgCIAKAAQAFAAADgCQADgDAAgJIAAgXQAAgJgDgCQgDgDgFgBIgKAAg");
	this.shape_8.setTransform(-28.6,0.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgaBEQgJgKAAgSIAAgKIAYAAIAAALQgBAJAEADQADADAFAAQAEAAAEgDQADgDAAgJQAAgIgDgGQgEgGgEgFIgKgLIgLgKQgGgGgDgIQgEgIAAgLQAAgTAJgKQAJgKAQAAQARAAAJAKQAKAKgBATIAAAFIgWAAIAAgHQgBgIgDgEQgDgDgGAAQgDAAgEADQgCAEAAAIQAAAIADAGIAGAMIAMAKIAMAKQAEAHAEAIQADAIAAALQABASgKAKQgJAKgRAAQgQAAgKgKg");
	this.shape_9.setTransform(-37.2,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.4,-13.4,86.9,26.9);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfBMIAAiYIA/AAIAAAXIgoAAIAAAqIAfAAIAAAVIgfAAIAAAtIAoAAIAAAVg");
	this.shape.setTransform(26.5,11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeBMIAAiYIAYAAIAACDIAlAAIAAAVg");
	this.shape_1.setTransform(19,11);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AARBMIgEgcIgbAAIgFAcIgWAAIAZiYIAhAAIAZCYgAgLAcIAVAAIgKhNg");
	this.shape_2.setTransform(10.4,11);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfBMIAAiYIA/AAIAAAXIgoAAIAAAqIAfAAIAAAVIgfAAIAAAtIAoAAIAAAVg");
	this.shape_3.setTransform(-1.4,11);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfBMIAAiYIAZAAIAACDIAlAAIAAAVg");
	this.shape_4.setTransform(-8.9,11);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AARBMIgEgcIgbAAIgFAcIgWAAIAZiYIAhAAIAZCYgAgLAcIAVAAIgKhNg");
	this.shape_5.setTransform(-17.5,11);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgiBMIAAiYIAiAAQARAAAJAKQAJAKAAASIAAAVQAAARgJAJQgJAKgRAAIgKAAIAAA5gAgKgCIAKAAQAFAAADgDQADgCAAgJIAAgXQAAgJgDgCQgDgDgFAAIgKAAg");
	this.shape_6.setTransform(-25.9,11);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AANBMIgchtIAABtIgWAAIAAiXIAeAAIAXBZIAAhZIAWAAIAACXg");
	this.shape_7.setTransform(36.1,-9.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AARBMIgEgbIgbAAIgFAbIgWAAIAZiXIAhAAIAZCXgAgLAcIAVAAIgKhMg");
	this.shape_8.setTransform(26.9,-9.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgKBMIAAiXIAVAAIAACXg");
	this.shape_9.setTransform(20.4,-9.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgfBMIAAiXIAZAAIAACCIAlAAIAAAVg");
	this.shape_10.setTransform(14.9,-9.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AARBMIgEgbIgbAAIgFAbIgWAAIAZiXIAhAAIAZCXgAgLAcIAVAAIgKhMg");
	this.shape_11.setTransform(6.3,-9.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAMBMIgBgCIAAgEIgBgEIAAgIIAAgZQAAgLgDgEQgFgEgGAAIgIAAIAAA+IgYAAIAAiXIAkAAQARgBAJAKQAIAIAAASIAAAMQAAAYgQAGQAKADADAIQADAJABAMIAAAYIAAAKIACAIgAgMgGIAJAAQAGAAADgEQAEgDAAgJIAAgQQAAgIgDgEQgDgEgEAAIgMAAg");
	this.shape_12.setTransform(-2.3,-9.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgLBMIAAiCIgZAAIAAgVIBJAAIAAAVIgZAAIAACCg");
	this.shape_13.setTransform(-10.9,-9.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgZBEQgKgKABgSIAAgKIAWAAIAAALQAAAJAEADQAEADAEAAQAFAAADgDQAEgDgBgJQABgIgEgGQgDgGgFgFIgKgLIgMgKQgEgGgFgIQgDgIAAgLQAAgTAJgKQAJgKAQAAQASAAAJAKQAJAKAAATIAAAFIgYAAIAAgHQAAgIgDgEQgDgDgGAAQgDAAgEADQgCAEAAAIQgBAIAEAGIAGAMIAMAKIAMAKQAFAHADAIQADAIABALQAAASgJAKQgKAKgRAAQgQAAgJgKg");
	this.shape_14.setTransform(-19,-10);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgZBDQgKgKAAgSIAAhzIAZAAIAAB0QAAAJADADQADADAEABQAGgBADgDQAEgDAAgJIAAh0IAXAAIAABzQAAASgKAKQgJALgRgBQgQABgJgLg");
	this.shape_15.setTransform(-27.5,-9.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AARBMIgEgbIgbAAIgFAbIgWAAIAZiXIAhAAIAZCXgAgLAcIAVAAIgKhMg");
	this.shape_16.setTransform(-36.3,-9.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.6,-23.9,89.2,47.8);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAMBMIgBgCIAAgEIgBgEIAAgJIAAgYQAAgKgDgFQgFgEgGAAIgIAAIAAA+IgYAAIAAiYIAkAAQARAAAJAJQAIAJAAASIAAAMQAAAYgQAGQAKADADAIQADAJABAMIAAAYIAAAKIACAIgAgMgGIAKAAQAEAAAEgEQAEgDAAgJIAAgQQAAgIgDgEQgDgEgEAAIgMAAg");
	this.shape.setTransform(21.2,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggBMIAAiYIBBAAIAAAWIgpAAIAAArIAgAAIAAAVIggAAIAAAtIApAAIAAAVg");
	this.shape_1.setTransform(12.6,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgLBMIAAiCIgZAAIAAgWIBJAAIAAAWIgZAAIAACCg");
	this.shape_2.setTransform(4.5,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AANBMIgBgCIgBgEIAAgEIgBgJIAAgYQAAgKgEgFQgEgEgFAAIgJAAIAAA+IgYAAIAAiYIAkAAQARAAAIAJQAJAJAAASIAAAMQAAAYgPAGQAIADAEAIQAEAJgBAMIAAAYIABAKIACAIgAgMgGIAJAAQAFAAAEgEQAEgDAAgJIAAgQQAAgIgDgEQgDgEgFAAIgLAAg");
	this.shape_3.setTransform(-3.6,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaBEQgJgKAAgSIAAhOQAAgTAJgKQAKgKAQAAQARAAAKAKQAJAKAAATIAABOQAAASgJAKQgKAKgRAAQgQAAgKgKgAgIg0QgDAEAAAIIAABRQAAAJADADQAEAEAEAAQAFAAADgEQAEgDAAgJIAAhRQAAgIgEgEQgDgDgFAAQgEAAgEADg");
	this.shape_4.setTransform(-12.6,0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgiBMIAAiYIAiAAQARAAAJAKQAJAKAAASIAAAUQAAASgJAJQgJAKgRAAIgKAAIAAA5gAgKgCIAKAAQAFAAADgCQADgDAAgJIAAgXQAAgJgDgCQgDgDgFgBIgKAAg");
	this.shape_5.setTransform(-20.9,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.4,-13.4,54.9,26.9);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.light();
	this.instance.setTransform(-120,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-200,240,400);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.light2();
	this.instance.setTransform(-137.5,-168);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.5,-168,275,336);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C58D46").s().p("AhWgzICtgBIhXBpg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.8,-5.3,17.6,10.6);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C58D46").s().p("AAMBMIgBgCIAAgEIgBgEIAAgJIAAgYQAAgKgDgFQgFgEgGAAIgIAAIAAA+IgYAAIAAiYIAkAAQARAAAJAJQAIAJAAASIAAAMQAAAYgQAGQAKADADAIQADAJABAMIAAAYIAAAKIACAIgAgMgGIAKAAQAEAAAEgEQAEgDAAgJIAAgQQAAgIgDgEQgDgEgEAAIgMAAg");
	this.shape.setTransform(21.2,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C58D46").s().p("AggBMIAAiYIBBAAIAAAWIgpAAIAAArIAgAAIAAAVIggAAIAAAtIApAAIAAAVg");
	this.shape_1.setTransform(12.6,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C58D46").s().p("AgLBMIAAiCIgZAAIAAgWIBJAAIAAAWIgZAAIAACCg");
	this.shape_2.setTransform(4.5,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C58D46").s().p("AANBMIgBgCIgBgEIAAgEIgBgJIAAgYQAAgKgEgFQgEgEgFAAIgJAAIAAA+IgYAAIAAiYIAkAAQARAAAIAJQAJAJAAASIAAAMQAAAYgPAGQAIADAEAIQAEAJgBAMIAAAYIABAKIACAIgAgMgGIAJAAQAFAAAEgEQAEgDAAgJIAAgQQAAgIgDgEQgDgEgFAAIgLAAg");
	this.shape_3.setTransform(-3.6,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C58D46").s().p("AgaBEQgJgKAAgSIAAhOQAAgTAJgKQAKgKAQAAQARAAAKAKQAJAKAAATIAABOQAAASgJAKQgKAKgRAAQgQAAgKgKgAgIg0QgDAEAAAIIAABRQAAAJADADQAEAEAEAAQAFAAADgEQAEgDAAgJIAAhRQAAgIgEgEQgDgDgFAAQgEAAgEADg");
	this.shape_4.setTransform(-12.6,0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C58D46").s().p("AgiBMIAAiYIAiAAQARAAAJAKQAJAKAAASIAAAUQAAASgJAJQgJAKgRAAIgKAAIAAA5gAgKgCIAKAAQAFAAADgCQADgDAAgJIAAgXQAAgJgDgCQgDgDgFgBIgKAAg");
	this.shape_5.setTransform(-20.9,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.4,-13.4,54.9,26.9);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C58D46").s().p("AgfBMIAAiYIA/AAIAAAXIgoAAIAAAqIAfAAIAAAVIgfAAIAAAtIAoAAIAAAVg");
	this.shape.setTransform(26.5,11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C58D46").s().p("AgeBMIAAiYIAYAAIAACDIAlAAIAAAVg");
	this.shape_1.setTransform(19,11);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C58D46").s().p("AARBMIgEgcIgbAAIgFAcIgWAAIAZiYIAhAAIAZCYgAgLAcIAVAAIgKhNg");
	this.shape_2.setTransform(10.4,11);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C58D46").s().p("AgfBMIAAiYIA/AAIAAAXIgoAAIAAAqIAfAAIAAAVIgfAAIAAAtIAoAAIAAAVg");
	this.shape_3.setTransform(-1.4,11);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C58D46").s().p("AgfBMIAAiYIAZAAIAACDIAlAAIAAAVg");
	this.shape_4.setTransform(-8.9,11);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C58D46").s().p("AARBMIgEgcIgbAAIgFAcIgWAAIAZiYIAhAAIAZCYgAgLAcIAVAAIgKhNg");
	this.shape_5.setTransform(-17.5,11);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C58D46").s().p("AgiBMIAAiYIAiAAQARAAAJAKQAJAKAAASIAAAVQAAARgJAJQgJAKgRAAIgKAAIAAA5gAgKgCIAKAAQAFAAADgDQADgCAAgJIAAgXQAAgJgDgCQgDgDgFAAIgKAAg");
	this.shape_6.setTransform(-25.9,11);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C58D46").s().p("AANBMIgchtIAABtIgWAAIAAiXIAeAAIAXBZIAAhZIAWAAIAACXg");
	this.shape_7.setTransform(36.1,-9.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C58D46").s().p("AARBMIgEgbIgbAAIgFAbIgWAAIAZiXIAhAAIAZCXgAgLAcIAVAAIgKhMg");
	this.shape_8.setTransform(26.9,-9.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C58D46").s().p("AgKBMIAAiXIAVAAIAACXg");
	this.shape_9.setTransform(20.4,-9.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C58D46").s().p("AgfBMIAAiXIAZAAIAACCIAlAAIAAAVg");
	this.shape_10.setTransform(14.9,-9.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C58D46").s().p("AARBMIgEgbIgbAAIgFAbIgWAAIAZiXIAhAAIAZCXgAgLAcIAVAAIgKhMg");
	this.shape_11.setTransform(6.3,-9.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C58D46").s().p("AAMBMIgBgCIAAgEIgBgEIAAgIIAAgZQAAgLgDgEQgFgEgGAAIgIAAIAAA+IgYAAIAAiXIAkAAQARgBAJAKQAIAIAAASIAAAMQAAAYgQAGQAKADADAIQADAJABAMIAAAYIAAAKIACAIgAgMgGIAJAAQAGAAADgEQAEgDAAgJIAAgQQAAgIgDgEQgDgEgEAAIgMAAg");
	this.shape_12.setTransform(-2.3,-9.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C58D46").s().p("AgLBMIAAiCIgZAAIAAgVIBJAAIAAAVIgZAAIAACCg");
	this.shape_13.setTransform(-10.9,-9.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C58D46").s().p("AgZBEQgKgKABgSIAAgKIAWAAIAAALQAAAJAEADQAEADAEAAQAFAAADgDQAEgDgBgJQABgIgEgGQgDgGgFgFIgKgLIgMgKQgEgGgFgIQgDgIAAgLQAAgTAJgKQAJgKAQAAQASAAAJAKQAJAKAAATIAAAFIgYAAIAAgHQAAgIgDgEQgDgDgGAAQgDAAgEADQgCAEAAAIQgBAIAEAGIAGAMIAMAKIAMAKQAFAHADAIQADAIABALQAAASgJAKQgKAKgRAAQgQAAgJgKg");
	this.shape_14.setTransform(-19,-10);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C58D46").s().p("AgZBDQgKgKAAgSIAAhzIAZAAIAAB0QAAAJADADQADADAEABQAGgBADgDQAEgDAAgJIAAh0IAXAAIAABzQAAASgKAKQgJALgRgBQgQABgJgLg");
	this.shape_15.setTransform(-27.5,-9.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C58D46").s().p("AARBMIgEgbIgbAAIgFAbIgWAAIAZiXIAhAAIAZCXgAgLAcIAVAAIgKhMg");
	this.shape_16.setTransform(-36.3,-9.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.6,-23.9,89.2,47.8);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C58D46").s().p("AAMBMIgBgCIAAgEIAAgEIgBgJIAAgYQAAgKgDgFQgFgEgGAAIgIAAIAAA+IgYAAIAAiYIAkAAQARAAAJAJQAIAJAAASIAAAMQAAAYgPAGQAJADADAIQAEAJAAAMIAAAYIAAAKIACAIgAgMgGIAJAAQAGAAADgEQAEgDAAgJIAAgQQAAgIgDgEQgDgEgEAAIgMAAg");
	this.shape.setTransform(37.2,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C58D46").s().p("AggBMIAAiYIBAAAIAAAWIgnAAIAAArIAeAAIAAAVIgeAAIAAAtIAnAAIAAAVg");
	this.shape_1.setTransform(28.6,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C58D46").s().p("AgaBEQgIgKgBgSIAAhOQABgTAIgKQAKgKAQAAQARAAAJAKQAJAKAAATIAAAPIgWAAIAAgRQgBgIgDgEQgDgDgGAAQgEAAgDADQgDAEgBAIIAABRQABAJADADQADADAEAAQAGAAADgDQADgDABgJIAAgcIgLAAIAAgUIAhAAIAAAvQAAASgJAKQgJAKgRAAQgQAAgKgKg");
	this.shape_2.setTransform(20.1,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C58D46").s().p("AARBMIgEgbIgbAAIgFAbIgWAAIAZiYIAhAAIAZCYgAgLAcIAVAAIgKhNg");
	this.shape_3.setTransform(11.3,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C58D46").s().p("AgfBMIAAiYIAZAAIAACDIAlAAIAAAVg");
	this.shape_4.setTransform(3.5,0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C58D46").s().p("AgfBMIAAiYIBAAAIAAAWIgpAAIAAArIAgAAIAAAVIggAAIAAAtIApAAIAAAVg");
	this.shape_5.setTransform(-7.9,0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C58D46").s().p("AgZBEQgKgKABgSIAAhOQgBgTAKgKQAJgKAQAAQARAAAKAKQAJAKAAATIAAAPIgYAAIAAgRQABgIgEgEQgDgDgGAAQgDAAgEADQgDAEAAAIIAABRQAAAJADADQAEADADAAQAGAAADgDQAEgDgBgJIAAgWIAYAAIAAAVQAAASgJAKQgKAKgRAAQgQAAgJgKg");
	this.shape_6.setTransform(-16.3,0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C58D46").s().p("AgLBMIAAiYIAWAAIAACYg");
	this.shape_7.setTransform(-22.7,0.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C58D46").s().p("AgiBMIAAiYIAiAAQARAAAJAKQAJAKAAASIAAAUQAAASgJAJQgJAKgRAAIgKAAIAAA5gAgKgCIAKAAQAFAAADgCQADgDAAgJIAAgXQAAgJgDgCQgDgDgFgBIgKAAg");
	this.shape_8.setTransform(-28.6,0.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C58D46").s().p("AgaBEQgJgKAAgSIAAgKIAYAAIAAALQgBAJAEADQADADAFAAQAEAAAEgDQADgDAAgJQAAgIgDgGQgEgGgEgFIgKgLIgLgKQgGgGgDgIQgEgIAAgLQAAgTAJgKQAJgKAQAAQARAAAJAKQAKAKgBATIAAAFIgWAAIAAgHQgBgIgDgEQgDgDgGAAQgDAAgEADQgCAEAAAIQAAAIADAGIAGAMIAMAKIAMAKQAEAHAEAIQADAIAAALQABASgKAKQgJAKgRAAQgQAAgKgKg");
	this.shape_9.setTransform(-37.2,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.4,-13.4,86.9,26.9);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C58D46").s().p("AggBMIAAiYIBBAAIAAAWIgpAAIAAArIAgAAIAAAVIggAAIAAAtIApAAIAAAVg");
	this.shape.setTransform(33.4,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C58D46").s().p("AgeBMIAAiYIAXAAIAACDIAnAAIAAAVg");
	this.shape_1.setTransform(25.9,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C58D46").s().p("AARBMIgEgbIgbAAIgFAbIgWAAIAZiYIAhAAIAZCYgAgLAcIAVAAIgKhNg");
	this.shape_2.setTransform(17.3,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C58D46").s().p("AgLBMIAAiCIgZAAIAAgWIBJAAIAAAWIgZAAIAACCg");
	this.shape_3.setTransform(5.5,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C58D46").s().p("AARBMIgEgbIgbAAIgFAbIgWAAIAZiYIAhAAIAZCYgAgLAcIAVAAIgKhNg");
	this.shape_4.setTransform(-2.9,0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C58D46").s().p("AgfBMIAAiYIA/AAIAAAWIgoAAIAAArIAfAAIAAAVIgfAAIAAAtIAoAAIAAAVg");
	this.shape_5.setTransform(-11.3,0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C58D46").s().p("AANBMIAAhBIgaAAIAABBIgYAAIAAiYIAYAAIAABCIAaAAIAAhCIAZAAIAACYg");
	this.shape_6.setTransform(-20.2,0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C58D46").s().p("AAJBMIgJhPIgHBPIghAAIgRiYIAYAAIAMB4IAMh4IAWAAIALB5IANh5IAVAAIgRCYg");
	this.shape_7.setTransform(-31.1,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.4,-13.4,78.8,26.9);


(lib.Symbol27copy3 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AiKJoQh2gRgLgNQgPgSAagRQAQgKA0gTQBwgoABgjQAEhSgCgOQgIgxgugWQg0gZhUhlQhchugYhPQgehqBHjGQBAixA7g2QAhgeBEgPQA7gOAaAGQAHACAsgFQArgFAIAGQAMAJBBAOQA+AOALAOQAlAvA7COQA7CNAJA8QAKBGggBcQgcBQgmArQhKBVgXAYQg/BBg0AiQgVANANBEQAMA+AVAhQASAcBzAYQArAJAKAJQAOAMgeAVQgSANhdAOQhhAPhLAAQgiAAhngOg");
	this.shape.setTransform(2.2,11.2);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol27copy2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AguMeQgjgFgxgMQhCgQgLgOQgaggAbheQAkh9AAgNIAIiRQAEhhgCgOQgCgPg8hSQg/hYgThAQghhzAhkKQAhkJAxgsQAlghA6gcQA6gcAWAFQAGACAtgFQArgFAIAGQALAJA9AZQA5AYALAPQAkAtAzErQAxEngMA9QgHAdg8BMQg/BQgJAZQgUA5gDAbQgDATgBBFQAAAMAZB0QAXBpgIARQgGANAUA5QALA9g0AlQgQALhZAGQgzADgcAAIgcgBg");
	this.shape.setTransform(1.6,0.7);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol27copy = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AiAK2QhZgLgLgyQgGgXiBx6QgEgqALgTQALgTAjgQQAvgVA9gPQApgLBIgOQAngIAUgBQAegCAxAHQCCAUB7A7QArAUAMAXQAIAPgDAQIACADQAFALg+JCQg+I6gDAPQgFAQgNAIIgCADQgLAUgnAHQhXAQhVAAQhAAAhAgJgAAigZQAFgEAEgGIgHgBIgCALg");
	this.shape.setTransform(0.7,10.3);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol27 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgRMwIg/gKQhUgNg8gBQgVgBgKgDQgSgFgGgMQgGgLADgNQADgMAJgKQAOgNAegJQA7gUATgJQAqgUATgfQAPgZAGguQANhlgThkQgGgegKgQIgUgZIAAAAQgggPgcgcQgvgsgwhWQghg4gOgsQgZhJAGhuQAOh+AFg/IAKh+QAJg8AUgrIgBgJIgIgkIgHglQgHgrAOgeQAJgVAVgPQATgPAYgHQAfgJBAgBICTgBQA8gBAgAEQAyAFAkAUQAcAQARAYQATAbABAdQAAAKgDAQIgFAaIgCAeQgCASgCALIgBADIgBAUQgDApABANQACAbARAuQASAzAEAWQACALABAUIADAfQADAPAIAcQAIAcADAOQAGAmgKBIQgDAagDANQgGAUgJAOQgCAfgHAZQgKAigXAmQgOAWghAqQgaAigOAQIgTATIgQAZIgXAcIgYAcQgtA5AEA1QABAMAFASIAGAdQAGAhgGA9QgCAYABAOQACAWALANQAIAMARAHQALAFAUAFIBJATQAaAHAJAKQAMAMgCATQgCASgNALQgNALgjAHIhHARQgpAJgeACIgPAAQgWAAgZgDg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bok4();
	this.instance.setTransform(-43,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43,-75,86,150);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bok3();
	this.instance.setTransform(-32,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-90,64,180);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bok2();
	this.instance.setTransform(-60,-79);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-79,121,158);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bok1();
	this.instance.setTransform(-37,-88);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37,-88,75,176);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.bg, null, new cjs.Matrix2D(1,0,0,1,-330,-432)).s().p("EgzjAEXIAAotMBnHAAAIAAItg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-330,-28,660,56);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F6E27A","#D54600"],[0.027,1],0,0,0,0,0,111.5).s().p("AsIMJQlClCAAnHQAAnGFClCQFClCHGAAQHHAAFCFCQFDFCgBHGQABHHlDFCQlCFDnHgBQnGABlClDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110,-110,220,220);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.t2();
	this.instance.setTransform(-64,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64,-16,128,33);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.t3();
	this.instance.setTransform(-64,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64,-17,128,34);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.t1();
	this.instance.setTransform(-75,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-16,151,33);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AImDVIgMgHIAAABQAAABAAAAQAAABAAAAQAAABgBAAQgBABAAAAQgEABgCgDIgCACQgBAAAAAAQgBABAAgBQgBAAAAAAQAAAAAAgBIgDgDIgBgCIgCgEQgEABgBgDIgGgNIAAAGQABADgEABQgDABgCgDQgMgZgHgTIAAgCIgEgJIgEgKIgZgFIgZgGIgsgJQgDARgKAcIgBgBQgIAhgLAPIgBAAIAAAAIADgNQgDAEgFADIgLAFQAAAAgBAAQAAABgBAAQAAAAgBgBQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIgBgHIgCAAQgEgBAAgEIAAgIIAAgDIgEAOIgCAFQAAAAAAABQgBABAAAAQgBAAAAAAQgBAAgBAAQgDgBABgDIADgOIACgIIAAgBIgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgQAHgWIALglIAAAAIgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABgBIgEgBQAAgBgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIAAgDIAAgDIgBgDIABgDIgBgCIgBgCIgCgCIgBgBIgHgGIgBAAIgBgCIgCgBQAAgBAAAAQgBAAAAAAQAAgBAAAAQAAgBABAAIgBgBIAAgBQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAABABIAPADQgBgDADgCIACgBIgHgHQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAIAEABIgCgBIAAgCIABgBIAJACQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAIAEACIAGACIABgIIgBgCIANg7IAThdIAEgXIAFgWIABgCQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAgBQAFgJAJABIABABIAEAAIACADIABACIABAAIAEAAIAEACQACAAAGgFIAHgIIAQgNQADgDADADQADADgBADIgBAFIABABIABARIABARIAEAHIAFAGIAEAMIAIAdIAJAeIARA0QAJAcABAZIAAAGIAQBCQAJAoAJAaIAAgBIAJAXIAAADIgCABIACAEIAAACQACAEAAAEIAAAAIgBAAIAAAAgAHCA/IgDgJIgMgaQgDgIAAgFQgBgIAGgEQADgDAEAAQgMgSgNgjIgKAaQgMAigGAcIgEAPIA/ANgAliDVIgMgHIAAABQAAABAAAAQAAABAAAAQAAABgBAAQgBABAAAAQgEABgBgDIgBgBQAAABAAAAQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBgBQAAAAgBAAQAAAAAAgBIgCgCIgBgBIgBgCIgCgEQgEABgBgDIgGgNIAAAGQABADgEABQgDABgCgDQgMgZgHgTIAAgCIgIgTIgZgFIgZgGIgsgJQgDAQgKAdIgBgBQgJAhgKAPIgBAAIAAAAIADgNQgDAEgFADIgLAFQAAAAgBAAQAAABgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIgBgHIgCAAQgEgBAAgEIAAgIIAAgDIgEAOIgBAFQgBADgEgBQgDgBABgDIADgOIABgEIAAgBIABgDIAAgBIgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQABgQAGgWIAFgPIAGgWIAAAAIgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABgBIgEgBQAAgBgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIAAgDIAAgDIgBgDQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAIgBgCIgBgCIgCgCIgBgBIgHgGIgBAAIgBgCIgCgBQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAIgBgBIAAgBQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAABABIAPADQgBgDADgCIACgBIgHgHQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAIADABIgCgBIAAgCIABgBIAJACQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAIAEACIAGACIABgIIgBgCIANg7IAThdIAEgXQADgOADgIIAAgCQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAEgJAJABIACABIADAAIACADIABACIABAAIAEAAIAEACQACAAAGgFIAHgIIAQgNQADgDADADQADADgBADIgBAFIABABIABARIABARIAEAHIAFAGQACAEACAIIAIAdIAJAeIARA0QAJAcABAZIAAAGIAQBCQAJAoAJAaIAAgBIAJAXQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABIgCABIACAEIAAACQACAEAAAEIAAAAIgBAAIAAAAgAnGA/IgDgJIgMgaQgDgIAAgFQgBgIAGgEQADgDAEAAQgMgSgNgjIgKAaQgMAigGAcIgEAPIA/ANgAD7DPIgBgMIgBgBIgBgDQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAIgDgRIgBAIQAAAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAAAIgCgBIAAgHIgBAGQAAAAgBABQAAAAAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAgBAAAAQgCgKgCgQIAAgCIgBAAIAAgEQgEgeAAgnIglgMIgdgLIgFgBIABARIgCAJIAAAKIgBALIAAALIADATIgBAAQADARgCAMIAAAJQgBAFgCAEQgBAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQgEgDgBgGIAAAAIgBAEIgCACIgCgBIgFgMIgCAWQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIgDgOIgBAEQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAIgBgMIgBAOQgBAAAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAIgBgBQgDgIgCgLIgCgVIgBgFIAAAAIgCgyIgBgiIgBgOIABgBIgHgDQgFgCgBgCQgCgDAAgEIABgGIABgHIgOgHQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAAAABAAIALADIgFgDIgBgCQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAIgFgEQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAIAEADIACAAIgDgCQAAAAgBgBQAAAAAAgBQAAgBAAAAQABgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABAAABABIAMAFIgKgIIAAgCIABAAIAIADIgBgBIgDgDQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBIADAAIAJAFIABgDIgBgCIAAgCIABAAIAAgQIADhGIAAgPQgCgIgBgUIAAgVQAAgMAEgIQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAABIACAHIAAAAIACgCIABABQACAEABAGQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAABAAIACgBQAAgIABgFQAAgBAAAAQABgBAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAABABIACAMIABABIAAgCQgBAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAAAAAQABAAAAABQAAAAAAABIAGANIABAAIACACIAPgDQAAAAABAAQABAAAAAAQABABAAAAQABABAAAAQACADgCACIgDAEIgCANIABAMIAAAsIgCAuIgBATIABASIA/AQIAAgQQADg1gEgmIgCgWIABgJQABgHgBgCIgFgHIgEgGQgEgHAAgKQAAgDACgCQgDgJACgKQAAgDAEgBQADgBADABIAEACQABgDAEAAQADgBADACIAIAGIAJAGQACgDADAAQAHgCAHADQAGACAFAGQAEAGABAJIABARIAGAKQACAEgCAEQgDAEgEABIgEBAIgBAqIgBAoQgBATgEASIABACIAFAMQACAHgBAFQgBAIgKABIAAAHIABAcIAAAAIgBAUQgBAngIATIgBABIgBgBIgCgHIgDAAQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAABIgBgBIgCALQAAAAgBAAQAAAAAAAAQAAABAAAAQgBAAAAAAIgCgBgAkKDMQgDgGgBgGIAAADQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBABQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBIgCgHIgBgCIgBgDIgCANQAAAAAAABQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBgBAAAAQAAgBAAAAIAAgFQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBIgCgEQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAIgCgJIgBgHQgBAHgDAEIgBABIgBgBQgFgGgBgMIgBgTIAAgVIAAgJIgCh+IgBgIIAAgIIAAgJQgCgGAAgJIABAAIgHhJIgQgDIgCAAQgHgBgLAAQgMABgKgCIgDgBIgVgDQgMgCgFgHIgBgBIABgBQAEgCAHABIAAgDIgHgBIgCgBIAAgCIAAAAIgCgBIAAgCIgKgCQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAIASAAIgDgDQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIgLgEQgBAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAABAAIgCgBQgGgDADgGQACgGAHABIAEgEQADgBAEABQAKADARABIAbADIAWAAIA0ABQApABAxAEQAHAAADABIABAAIABABIADACIACABIACAAQALACALAGIACACIAGADQAAAAABAAQAAABAAAAQABABAAAAQAAABAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBABAAAAIgDABIAIAFQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQgBABAAAAQgBAAAAAAQgBABAAAAIgKgBIAEAEQAAAAABAAQAAAAAAABQAAAAAAAAQABABAAAAQAAAAgBABQAAAAAAAAQAAABAAAAQgBAAAAABQgFACgMABQAGAEAEAFIAAABIgBAAIgMgEIgBACIgGgBIgGgCQgDgCgDAAIgBAAQgDADgFAAIgEgBIgBABIgIgBIgjAAIgBANIAAAaIgCAaIgBAGIgBAQQgBAKABAHIABADIgCAXIgGA3IgEA6QgBAPABAKIABAEIAAAGIAAABIAAADIAAAPQAAALgCAFQABAMgCAKIgBAAIgBAAgALlDJIgCgCIgBgBIgIgPQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAgBIgBgBIgBAAIADAJIAAABIgBgBIgGgHIAAANIgBABIgBgBIgCgGQAAAAgBAAQAAABgBAAQAAgBAAAAQAAAAAAAAIgHgPQAAAIgCAIIgBACIAAAAIAAABIgCAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQgHgPgEgXIgWg9IgJgYIgKgYQgEgHgLgMIgIgIIgDABIgKAEIgJADQABAfAFAkIAEAjQALAZgBAhQAAAAgBABQAAAAAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIgXgCQgHAAgFADQgEACgFAGQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgFgBgDgEQgDgDgBgHQgFgVABgMIgIhIQgEgqgBgeQgBgjAAg2IAAghQAAgUABgNIgHgEIgDgCIgFgCQgGgDABgHQABgHAHgCIAAAAQAAgEADgDQADgDAFAAIAOAAQANgDAOABIAFABIAOAAQAJAAABAJQABAIgIAEIgCADIgBAAQgBAFABAPIAAAXIAAA2IABAfQABgEAFAAIAMgDIALgEIAGgJQAGgGACAAIALgfQAMggAFgJIAGgWIAIghIACgKIgBgBIAEgPQAAgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIABgBIABABIABABIAAAAIAAABIAAAAIABABIAAAAIADAIIAEANIABACIAGgTQAAgBABAAQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAAAQABABAAAAIgBAKIABAAIAAAIQABAAAAAAQABAAAAABQAAAAAAAAQABABAAAAIAAADIABAAQADgBADABIAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAAAAAABIAAABIADACIAAgCQAAAAAAgBQABAAAAAAQABgBAAAAQABAAABABQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAABIgEAKIABABQADAAACAEQACADgBADIgaBBQgPAmgIAdIgCAHIgCAHIALALQAGAFAEAGQAFAKAFAQIAIAaIAMAkIgBABIACACQAHAPAFAPIAAACIADANQAFASAEAaIAAACIABAFIgBABQgBAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAgBAAAAIgCgDIgCgCIgFgLIgDACQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIABADQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBIgBgCIAEAKQAAAAAAABQAAAAAAAAQgBAAAAABQAAAAAAAAIABACQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABAAAAIgBAAIAAgBgAhUC3QgSgJgPgXQgKgPgKgaIAAgBIACgBIgBAAIAAgCIgBgBIAAgBIgBgCIgOgcIAAgBIABAAIAPAOIgDgFQgCgCACgDQACgCACgBIgCgCQgCgDADgCQAEgCACADIAAAAIADgCQAAAAABAAQAAAAAAAAQABAAAAAAQABABAAAAIACACIgEgLIgDgKQgBgBAAAAQAAAAABgBQAAAAAAAAQAAAAABAAIAAgBIAAgBIABAAQAJAEALAPQAMAKANAPIACACIAVAZQASggAJgdIABgDIgDgFQgEAAgCgEQgQgVgMgXQgXgogQgqIgKgcQgLgUgEgNIABgCQAAAAABgBQAAAAAAAAQABABAAAAQAAAAAAAAIAEAEQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAABIAFAEQgEgLgCgIQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAABQABAAAAABIABACIgFgQQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABIADAEIgCgFQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAABABAAQAAABAAAAIAMAXIAAABIABABIgCgGQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAAAIACgBIgBgFQgBgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQABAAAAAAQABAAABAAQAAAAABAAQAAABABABIACAFQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAABIADAEIABgCQgBAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAIgCgIQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAAAIADgCQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAHALAGAPIALAbIAGAQIAGASIAZBAQAIgsAEgTQAHgiAKgbIAAgCIAFgOQAAgBAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAEgFAEgBQADAAAEACIAHACIAMgBQAHgBAEACQAHADgBANQgBAHgDAMQgDASgDAHIgOBPQgLA/gOAqQgRA6gZArIgMARQgIAJgJACIgEAAQgPAAgVgPgAq8DCIgCgJQgBADgEAAQgEgBgBgEQgHgUgDgdQgCgVABgeQAAgOAFglQADgggBgSIgDgyIAAgRIgBgRQgDgIAAgIIgBgFIgBAAIgDgBIgDABQgKABgKgFQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABAAABAAIAEAAIAAgDQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAABAAIAFAAQgCgCABgDIgWgFQgBAAgBgBQAAAAAAAAQAAgBgBgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAABAAIAKgBIABAAIAJgCIgGgIIgBgBIAAgCIgBAAIgDgDIgBAAIgBAAIAAgCIAGgDIgBgCQAAAAAAgBQAAAAAAAAQABAAAAgBQAAAAABAAQAIgEAJgDIADgBIACAAIAAAAIAXADQARgBAIADQAUgBAUABIAbADIAYACQADgIAJACQAIABACAIQAEACABAEQACAEgBAEIgJA8QgBAHgGABQgGABgEgEIgBABQgDACgEgBQgEgCgBgDIAAgDQgGgDgCgHIgBgEIgNgBIgjAAIgKAAQgEBCAAA8IACBIIACAjIABASIgBASIgCAEQgBAOgGALIAAABQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgBAAIAAAAIgBgCIgBgIIgBgBIgCgDIgDgFIgBABIABAUQAAAAAAABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIgDgPQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAAAgBIABACQAAAAgBAAQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAIACAKIgBADIgCAAIAAAIIgBABIgBgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AImDVIgMgHIAAABQAAABAAAAQAAABAAABQAAAAgBAAQgBABAAAAQgEABgCgDIgCACQgBAAAAAAQgBABAAgBQgBAAAAAAQAAAAAAgBIgDgDIgBgCIgCgEQgEABgBgDIgGgNIAAAGQAAABAAABQAAAAAAABQgBAAAAAAQgBABgBAAQgDABgCgDQgMgZgHgTIAAgCIgEgJIgEgKIgZgFIgZgGIgsgJQgDARgKAcIgBgBQgIAhgLAPIgBAAIAAAAIADgNQgDAEgFADIgLAFQAAAAgBABQAAAAgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIgBgHIgCAAQgEgBAAgEIAAgIIAAgDIgEAOIgCAFQAAAAAAABQgBABAAAAQgBAAAAAAQgBAAgBAAQgDgBABgDIADgOIACgIIAAgBIgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgQAHgWIALglIAAAAIgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAIgEgBQAAgBgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIAAgDIAAgDIgBgDIABgDIgBgCIgBgCIgCgCIgBgBIgHgGIgBAAIgBgCIgCgBQAAgBAAAAQgBAAAAgBQAAAAAAAAQAAgBABAAIgBgBIAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAABABIAPADQgBgDADgCIACgBIgHgHQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAIAEABIgCgBIAAgCIABgBIAJACQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAIAEACIAGACIABgIIgBgCIANg7IAThdIAEgXIAFgWIABgCQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAFgJAJABIABABIAEAAIACADIABACIABAAQAAAAABgBQAAAAABAAQAAABABAAQAAAAABAAIAEACQACAAAGgFIAHgIIAQgNQADgDADADQADADgBADIgBAFIABABIABARIABARIAEAHIAFAGIAEAMIAIAdIAJAeIARA0QAJAcABAZIAAAGIAQBCQAJAoAJAaIAAgBIAJAXIAAADIgCABIACAEIAAACQACAEAAAEIAAAAIgBAAIAAAAgAHCA/IgDgJIgMgaQgDgIAAgFQgBgIAGgEQADgDAEAAQgMgSgNgjIgKAaQgMAigGAcIgEAPIA/ANgAliDVIgMgHIAAABQAAABAAAAQAAABAAABQAAAAgBAAQgBABAAAAQgEABgBgDIgBgBQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBgBQAAAAgBAAQAAAAAAgBIgCgCIgBgBIgBgCIgCgEQgEABgBgDIgGgNIAAAGQAAABAAABQAAAAAAABQgBAAAAAAQgBABgBAAQgDABgCgDQgMgZgHgTIAAgCIgIgTIgZgFIgZgGIgsgJQgDAQgKAdIgBgBQgJAhgKAPIgBAAIAAAAIADgNQgDAEgFADIgLAFQAAAAgBABQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIgBgHIgCAAQgEgBAAgEIAAgIIAAgDIgEAOIgBAFQgBADgEgBQgDgBABgDIADgOIABgEIAAgBIABgDIAAgBIgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQABgQAGgWIAFgPIAGgWIAAAAIgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAIgEgBQAAgBgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIAAgDIAAgDIgBgDQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAIgBgCIgBgCIgCgCIgBgBIgHgGIgBAAIgBgCIgCgBQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIgBgBIAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAABABIAPADQgBgDADgCIACgBIgHgHQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAIADABIgCgBIAAgCIABgBIAJACQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAIAEACIAGACIABgIIgBgCIANg7IAThdIAEgXQADgOADgIIAAgCQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAEgJAJABIACABIADAAIACADIABACIABAAIAEAAIAEACQACAAAGgFIAHgIIAQgNQADgDADADQADADgBADIgBAFIABABIABARIABARIAEAHIAFAGQACAEACAIIAIAdIAJAeIARA0QAJAcABAZIAAAGIAQBCQAJAoAJAaIAAgBIAJAXQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAAAABIgCABIACAEIAAACQACAEAAAEIAAAAIgBAAIAAAAgAnGA/IgDgJIgMgaQgDgIAAgFQgBgIAGgEQADgDAEAAQgMgSgNgjIgKAaQgMAigGAcIgEAPIA/ANgAD7DPIgBgMIgBgBIgBgDQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAIgDgRIgBAIQAAAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAAAIgCgBIAAgHIgBAGQAAAAgBABQAAAAAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAgBAAAAQgCgKgCgQIAAgCIgBAAIAAgEQgEgeAAgnIglgMIgdgLIgFgBIABARIgCAJIAAAKIgBALIAAALIADATIgBAAQADARgCAMIAAAJQgBAFgCAEQgBAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQgEgDgBgGIAAAAIgBAEIgCACIgCgBIgFgMIgCAWQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIgDgOIgBAEQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAIgBgMIgBAOQgBAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAIgBgBQgDgIgCgLIgCgVIgBgFIAAAAIgCgyIgBgiIgBgOIABgBIgHgDQgFgCgBgCQgCgDAAgEIABgGIABgHIgOgHQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAAAABAAIALADIgFgDIgBgCQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAIgFgEQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAIAEADIACAAIgDgCQAAAAgBgBQAAAAAAgBQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAABABIAMAFIgKgIIAAgCIABAAIAIADIgBgBIgDgDQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAIADAAIAJAFIABgDIgBgCIAAgCIABAAIAAgQIADhGIAAgPQgCgIgBgUIAAgVQAAgMAEgIQAAgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAABIACAHIAAAAIACgCIABABQACAEABAGQAAgBABAAQAAAAAAAAQAAgBABAAQAAAAABABIACgBQAAgIABgFQAAgBAAAAQABgBAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAABABIACAMIABABIAAgCQgBAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAAAAAQABABAAAAQAAAAAAABIAGANIABAAIACACIAPgDQAAAAABAAQABAAAAAAQABABAAAAQABABAAAAQACADgCACIgDAEIgCANIABAMIAAAsIgCAuIgBATIABASIA/AQIAAgQQADg1gEgmIgCgWIABgJQABgHgBgCIgFgHIgEgGQgEgHAAgKQAAgDACgCQgDgJACgKQAAgDAEgBQADgBADABIAEACQABgDAEAAQADgBADACIAIAGIAJAGQACgDADAAQAHgCAHADQAGACAFAGQAEAGABAJIABARIAGAKQACAEgCAEQgDAEgEABIgEBAIgBAqIgBAoQgBATgEASIABACIAFAMQACAHgBAFQgBAIgKABIAAAHIABAcIAAAAIgBAUQgBAngIATIgBABIgBgBIgCgHIgDAAQAAAAAAABQAAAAAAAAQAAAAgBAAQAAABAAAAIgBgBIgCALQAAAAgBAAQAAAAAAAAQAAABAAAAQgBAAAAAAIgCgBgAkKDMQgDgGgBgGIAAADQAAAAAAAAQAAABAAAAQgBAAAAAAQAAABgBAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBIgCgHIgBgCIgBgDIgCANQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgBAAAAgBQgBAAAAAAQAAgBAAAAIAAgFQgBABAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBIgCgEQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAIgCgJIgBgHQgBAHgDAEIgBABIgBgBQgFgGgBgMIgBgTIAAgVIAAgJIgCh+IgBgIIAAgIIAAgJQgCgGAAgJIABAAIgHhJIgQgDIgCAAQgHgBgLAAQgMABgKgCIgDgBIgVgDQgMgCgFgHIgBgBIABgBQAEgCAHABIAAgDIgHgBIgCgBIAAgCIAAAAIgCgBIAAgCIgKgCQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAIASAAIgDgDQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIgLgEQgBAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAABAAIgCgBQgGgDADgGQACgGAHABIAEgEQADgBAEABQAKADARABIAbADIAWAAIA0ABQApABAxAEQAHAAADABIABAAIABABIADACIACABIACAAQALACALAGIACACIAGADQAAAAABAAQAAABAAAAQABABAAAAQAAABAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBABAAAAIgDABIAIAFQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAIgKgBIAEAEQAAAAABAAQAAAAAAABQAAAAAAAAQABABAAAAQAAAAgBABQAAAAAAAAQAAABAAAAQgBAAAAABQgFACgMABQAGAEAEAFIAAABIgBAAIgMgEIgBACIgGgBIgGgCQgDgCgDAAIgBAAQgDADgFAAIgEgBIgBABIgIgBIgjAAIgBANIAAAaIgCAaIgBAGIgBAQQgBAKABAHIABADIgCAXIgGA3IgEA6QgBAPABAKIABAEIAAAGIAAABIAAADIAAAPQAAALgCAFQABAMgCAKIgBAAIgBAAgALlDJIgCgCIgBgBIgIgPQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAgBIgBgBIgBAAIADAJIAAABIgBgBIgGgHIAAANIgBABIgBgBIgCgGQAAAAgBAAQAAABgBAAQAAgBAAAAQAAAAAAAAIgHgPQAAAIgCAIIgBACIAAAAIAAABIgCAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQgHgPgEgXIgWg9IgJgYIgKgYQgEgHgLgMIgIgIIgDABIgKAEIgJADQABAfAFAkIAEAjQALAZgBAhQAAAAgBABQAAAAAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIgXgCQgHAAgFADQgEACgFAGQgBAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgFgBgDgEQgDgDgBgHQgFgVABgMIgIhIQgEgqgBgeQgBgjAAg2IAAghQAAgUABgNIgHgEIgDgCIgFgCQgGgDABgHQABgHAHgCIAAAAQAAgEADgDQADgDAFAAIAOAAQANgDAOABIAFABIAOAAQAJAAABAJQABAIgIAEIgCADIgBAAQgBAFABAPIAAAXIAAA2IABAfQABgEAFAAIAMgDIALgEIAGgJQAGgGACAAIALgfQAMggAFgJIAGgWIAIghIACgKIgBgBIAEgPQAAgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIABgBIABABIABABIAAAAIAAABIAAAAIABABIAAAAIADAIIAEANIABACIAGgTQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAAAQABABAAAAIgBAKIABAAIAAAIQABAAAAAAQABAAAAABQAAAAAAAAQABABAAAAIAAADIABAAQADgBADABIAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABIAAABIADACIAAgCQAAgBAAAAQABAAAAgBQABAAAAAAQABAAABABQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAABIgEAKIABABQADAAACAEQACADgBADIgaBBQgPAmgIAdIgCAHIgCAHIALALQAGAFAEAGQAFAKAFAQIAIAaIAMAkIgBABIACACQAHAPAFAPIAAACIADANQAFASAEAaIAAACIABAFIgBABQgBAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAgBAAAAIgCgDIgCgCIgFgLIgDACQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIABADQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBIgBgCIAEAKQAAAAAAABQAAAAAAAAQgBAAAAABQAAAAAAAAIABACQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAABIgBAAIAAgBgAhUC3QgSgJgPgXQgKgPgKgaIAAgBIACgBIgBAAIAAgCIgBgBIAAgBIgBgCIgOgcIAAgBIABAAIAPAOIgDgFQgCgCACgDQAAAAABgBQAAAAABgBQAAAAABAAQAAgBABAAIgCgCQgCgDADgCQAEgCACADIAAAAIADgCQAAAAABAAQAAAAAAAAQABAAAAAAQABABAAAAIACACIgEgLIgDgKQgBgBAAAAQAAAAABgBQAAAAAAAAQAAAAABAAIAAgBIAAgBIABAAQAJAEALAPQAMAKANAPIACACIAVAZQASggAJgdIABgDIgDgFQgEAAgCgEQgQgVgMgXQgXgogQgqIgKgcQgLgUgEgNIABgCQAAgBABAAQAAAAAAABQABAAAAAAQAAAAAAAAIAEAEQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAABIAFAEQgEgLgCgIQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAABAAAAQABAAAAABIABACIgFgQQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABIADAEIgCgFQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAABABAAQAAAAAAABIAMAXIAAABIABABIgCgGQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAIACgBIgBgFQgBgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQABAAAAAAQABAAABAAQAAAAABAAQAAABABABIACAFQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAABIADAEIABgCQgBAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAIgCgIQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAIADgCQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAHALAGAPIALAbIAGAQIAGASIAZBAQAIgsAEgTQAHgiAKgbIAAgCIAFgOQAAgBAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAEgFAEgBQADAAAEACIAHACIAMgBQAHgBAEACQAHADgBANQgBAHgDAMQgDASgDAHIgOBPQgLA/gOAqQgRA6gZArIgMARQgIAJgJACIgEAAQgPAAgVgPgAq8DCIgCgJQgBADgEAAQgEgBgBgEQgHgUgDgdQgCgVABgeQAAgOAFglQADgggBgSIgDgyIAAgRIgBgRQgDgIAAgIIgBgFIgBAAIgDgBIgDABQgKABgKgFQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABAAABAAIAEAAIAAgDQAAgBABAAQAAAAAAAAQAAgBABAAQAAAAABAAIAFAAQgCgCABgDIgWgFQgBAAgBgBQAAAAAAgBQAAAAgBgBQAAAAABgBQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAABAAIAKgBIABAAIAJgCIgGgIIgBgBIAAgCIgBAAIgDgDIgBAAIgBAAIAAgCIAGgDIgBgCQAAAAAAgBQAAAAAAAAQABAAAAgBQAAAAABAAQAIgEAJgDIADgBIACAAIAAAAIAXADQARgBAIADQAUgBAUABIAbADIAYACQADgIAJACQAIABACAIQAEACABAEQACAEgBAEIgJA8QgBAHgGABQgGABgEgEIgBABQgDACgEgBQgEgCgBgDIAAgDQgGgDgCgHIgBgEIgNgBIgjAAIgKAAQgEBCAAA8IACBIIACAjIABASIgBASIgCAEQgBAOgGALIAAABQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgBAAIAAAAIgBgCIgBgIIgBgBIgCgDIgDgFIgBABIABAUQAAAAAAABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIgDgPQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAIABACQAAAAgBAAQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAIACAKIgBADIgCAAIAAAIIgBABIgBgBg");
	this.shape_1.setTransform(1,2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.4,-21.3,153.8,44.8);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("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");
	this.shape_1.setTransform(1,2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.1,-35.6,151.1,73.2);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg();
	this.instance.setTransform(-330,-230);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-330,-230,660,460);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0.294)","#000000"],[0,1],0,0,0,0,0,282.3).s().p("A/OfPMAAAg+dMA+dAAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200,-200,400,400);


(lib.bot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bottle();
	this.instance.setTransform(-136,-198);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136,-198,202,400);


(lib.Symbol54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.t2 = new lib.Symbol6();
	this.t2.setTransform(0.1,34.8);

	this.t1 = new lib.Symbol5();
	this.t1.setTransform(-0.6,-20.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.3,-56.4,153.8,114.6);


(lib.Symbol33 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mc = new lib.Symbol34();
	this.mc.setTransform(0.5,0);
	this.mc.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137,-168,275,336);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.ar = new lib.Symbol32();
	this.ar.setTransform(0,20);

	this.timeline.addTween(cjs.Tween.get(this.ar).wait(1));

	// Layer 1 copy
	this.t = new lib.Symbol28();

	this.timeline.addTween(cjs.Tween.get(this.t).wait(1));

	// Layer 1
	this.w = new lib.Symbol39();

	this.timeline.addTween(cjs.Tween.get(this.w).wait(1));

	// Layer 3
	this.light = new lib.Symbol33();
	this.light.setTransform(0,0,0.75,0.75,0,0,0,0,-133);
	this.light.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.light).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.7,-26.2,206.3,252);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.ar = new lib.Symbol32();
	this.ar.setTransform(0,20);

	this.timeline.addTween(cjs.Tween.get(this.ar).wait(1));

	// Layer 1 copy
	this.t = new lib.Symbol29();

	this.timeline.addTween(cjs.Tween.get(this.t).wait(1));

	// Layer 1
	this.w = new lib.Symbol38();

	this.timeline.addTween(cjs.Tween.get(this.w).wait(1));

	// Layer 3
	this.light = new lib.Symbol33();
	this.light.setTransform(0,0,0.75,0.75,0,0,0,0,-133);
	this.light.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.light).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.7,-26.2,206.3,252);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.ar = new lib.Symbol32();
	this.ar.setTransform(0,30);

	this.timeline.addTween(cjs.Tween.get(this.ar).wait(1));

	// Layer 1 copy
	this.t = new lib.Symbol30();

	this.timeline.addTween(cjs.Tween.get(this.t).wait(1));

	// Layer 1
	this.w = new lib.Symbol37();

	this.timeline.addTween(cjs.Tween.get(this.w).wait(1));

	// Layer 3
	this.light = new lib.Symbol33();
	this.light.setTransform(0,0,0.75,0.75,0,0,0,0,-133);
	this.light.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.light).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.7,-26.2,206.3,252);


(lib.Symbol22 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.ar = new lib.Symbol32();
	this.ar.setTransform(0,20);

	this.timeline.addTween(cjs.Tween.get(this.ar).wait(1));

	// Layer 1 copy
	this.t = new lib.Symbol31();

	this.timeline.addTween(cjs.Tween.get(this.t).wait(1));

	// Layer 1
	this.w = new lib.Symbol36();

	this.timeline.addTween(cjs.Tween.get(this.w).wait(1));

	// Layer 3
	this.light = new lib.Symbol33();
	this.light.setTransform(0,0,0.75,0.75,0,0,0,0,-133);
	this.light.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.light).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.7,-26.2,206.3,252);


(lib.Symbol12copy3 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ACMCvIgKhAIhDAAIgKBAIgyAAIA4lcIBQAAIA4FcgABGA/IA1AAIgbiugAhNCvIAAiXIg+AAIAACXIg3AAIAAlcIA3AAIAACWIA+AAIAAiWIA4AAIAAFcg");
	mask.setTransform(0.7,1.2);

	// Layer 2
	this.instance = new lib.Symbol15();
	this.instance.setTransform(53.3,12.7,1.623,0.398);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAoCuIgJg/IhCAAIgJA/IgzAAIA4lcIBPAAIA4FcgAgcBAIAzAAIgYiwg");
	this.shape.setTransform(11.7,4.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAeCuIAAiWIg8AAIAACWIg3AAIAAlcIA3AAIAACXIA8AAIAAiXIA4AAIAAFcg");
	this.shape_1.setTransform(-9.2,4.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.9,-25,45.9,56.1);


(lib.Symbol12copy2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnNCbQgVgWAAgqIAAgnIA0AAIAAAqQAAATAHAIQAIAHANAAQAOABAHgJQAIgHAAgYIAAgbQAAgZgIgKQgJgKgTAAIgOAAIAAgwIARAAQAQAAAIgIQAJgIAAgVIAAgTQAAgYgIgIQgHgJgOAAQgNABgIAHQgHAIgBATIAAAcIgyAAIAAgZQAAgrAVgXQATgVApAAQAogBAVAXQAVAXAAArIAAAJQAAA3gnARQAVAIAKASQAIASAAAbIAAAcQAAAqgVAWQgVAYgoAAQgoAAgVgYgA2aCbQgUgWgBgqIAAi0QABgrAUgXQAVgXApABQAogBAUAXQAWAXAAArIAAAhIg0AAIAAglQAAgTgJgIQgHgHgNgBQgNABgIAHQgHAIAAATIAAC7QAAATAHAHQAIAIANAAQANAAAHgIQAJgHAAgTIAAgyIA0AAIAAAvQAAAqgWAWQgUAYgoAAQgpAAgVgYgAV5CuIAAlcIA2AAIAAFcgAUdCuIAAj5IgnD5IgzAAIgqj1IAAD1IgvAAIAAlcIBMAAIApD3IAlj3IBMAAIAAFcgAQZCuIgJg/IhEAAIgKA/IgyAAIA4lcIBRAAIA4FcgAPTBAIA1AAIgbiwgAM/CuIAAiVIg/AAIAACVIg3AAIAAlcIA3AAIAACWIA/AAIAAiWIA4AAIAAFcgAJqCuIAAlcIA3AAIAAFcgAGfCuIAAlcIBTAAQArAAAUAVQATATAAApIAAANQAAAbgJARQgIARgTAJQAXAJAIARQAKATAAAcIAAAcQAAApgVAWQgVAUgpAAgAHWB9IAgAAQAOAAAGgIQAIgHAAgUIAAgfQAAgYgJgJQgHgJgUAAIgYAAgAHWgfIAWAAQAPAAAJgIQAJgIAAgVIAAgTQAAgUgHgIQgHgIgPAAIgaAAgAFOCuIgKg/IhDAAIgJA/IgzAAIA4lcIBQAAIA5FcgAEIBAIA1AAIgaiwgABzCuIAAiVIg+AAIAACVIg1AAIAAlcIA1AAIAACWIA+AAIAAiWIA4AAIAAFcgAifCuIgJg/IhDAAIgKA/IgzAAIA4lcIBRAAIA4FcgAjkBAIA1AAIgbiwgAqLCuIAAlcIA3AAIAAFcgAtOCuIAAlcIA3AAIAACEIAaAAQAqAAAUAWQAUAUAAArIAAAtQAAAqgUAXQgUAVgqAAgAsXB9IAaAAQANgBAHgGQAHgIAAgTIAAg0QAAgTgHgHQgHgHgNAAIgaAAgAuuCuIAAiMQgIAJgOAFQgNAFgMAAQghAAgSgXQgRgWAAghIAAiVIA3AAIAACQQAAARAKAJQAJAGANAAQANABAIgIQAIgJgBgSIAAiOIA4AAIAAFcgAxvCuIgJg/IhEAAIgJA/IgyAAIA3lcIBRAAIA4FcgAy1BAIA1AAIgaiwg");
	mask.setTransform(-0.2,1.2);

	// Layer 2
	this.instance = new lib.Symbol15();
	this.instance.setTransform(2.7,-7.8,1.454,0.735);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgaCvIAAlcIA1AAIAAFcg");
	this.shape.setTransform(144.6,4.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AA/CvIAAj5IgmD5IgyAAIgpj2IAAD2IgwAAIAAlcIBNAAIAmD2IAmj2IBMAAIAAFcg");
	this.shape_1.setTransform(126.3,4.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAoCvIgJhAIhCAAIgJBAIgzAAIA4lcIBPAAIA4FcgAgcA/IAzAAIgYiug");
	this.shape_2.setTransform(102.6,4.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAeCvIAAiWIg8AAIAACWIg3AAIAAlcIA3AAIAACVIA8AAIAAiVIA4AAIAAFcg");
	this.shape_3.setTransform(81.8,4.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgaCvIAAlcIA1AAIAAFcg");
	this.shape_4.setTransform(66.4,4.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhUCvIAAlcIBTAAQAqgBATAVQATATAAApIAAAMQAAAbgJASQgIASgTAIQAXAJAJARQAKATgBAcIAAAcQAAApgUAVQgWAWgpAAgAgdB8IAeAAQAOAAAHgHQAHgIABgTIAAgeQAAgZgJgJQgIgJgRAAIgZAAgAgdgfIAWAAQAOAAAIgIQAJgIAAgVIAAgUQAAgTgGgIQgIgJgMAAIgbAAg");
	this.shape_5.setTransform(51.8,4.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAoCvIgJhAIhCAAIgJBAIgzAAIA4lcIBPAAIA4FcgAgcA/IAzAAIgYiug");
	this.shape_6.setTransform(31.1,4.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAeCvIAAiWIg8AAIAACWIg3AAIAAlcIA3AAIAACVIA8AAIAAiVIA4AAIAAFcg");
	this.shape_7.setTransform(10.3,4.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAoCvIgJhAIhCAAIgJBAIgzAAIA4lcIBPAAIA4FcgAgcA/IAzAAIgYiug");
	this.shape_8.setTransform(-18.3,4.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ag7CbQgWgWAAgrIAAgmIA0AAIAAAqQABATAHAIQAIAIANgBQALAAAHgHQAIgJAAgXIAAgcQABgYgJgKQgIgKgSAAIgNAAIAAgwIARAAQANAAAIgIQAJgIAAgVIAAgUQAAgXgIgIQgHgIgLAAQgNgBgIAJQgIAHAAATIAAAdIgzAAIAAgaQABgrAUgWQAUgXAnAAQAoABAUAWQAWAXgBAqIAAAJQABA5gnAPQAVAJAJARQAJATgBAbIAAAbQABArgWAWQgUAXgoAAQgnAAgUgXg");
	this.shape_9.setTransform(-38.4,4.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("ABFCvIAAlcIA3AAIAAFcgAh7CvIAAlcIA3AAIAACDIAaAAQApAAATAWQAUAUAAArIAAAtQAAArgUAVQgTAXgpAAgAhEB8IAaAAQANABAHgIQAHgGAAgUIAAg0QAAgTgHgHQgHgHgNAAIgaAAg");
	this.shape_10.setTransform(-70.5,4.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAeCvIAAiNQgJAJgNAGQgMAEgLAAQgiAAgSgWQgRgWAAgjIAAiTIA3AAIAACPQAAARAKAJQAJAHALgBQANAAAIgHQAIgJAAgSIAAiNIA3AAIAAFcg");
	this.shape_11.setTransform(-95.6,4.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAoCvIgJhAIhCAAIgJBAIgzAAIA4lcIBPAAIA4FcgAgcA/IAzAAIgYiug");
	this.shape_12.setTransform(-115.9,4.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ag8CbQgUgWAAgrIAAi0QAAgqAUgXQAVgWAngBQAoABAVAWQAUAXABAqIAAAjIg1AAIAAgmQABgTgJgHQgHgJgNABQgLgBgHAJQgJAHABATIAAC7QgBATAJAIQAHAHALAAQANAAAHgHQAJgIgBgTIAAgyIA1AAIAAAuQgBArgUAWQgVAXgoAAQgnAAgVgXg");
	this.shape_13.setTransform(-135.6,4.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147.4,-25,298.9,56.1);


(lib.Symbol12copy = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ax2DhQgdghAAg9IAAg4IBKAAIAAA9QABAbAKALQALAMAUAAQASAAALgMQALgMAAghIAAgoQAAgjgMgPQgMgOgbAAIgUAAIAAhGIAYAAQAWAAANgMQAMgLAAgeIAAgcQAAgigLgMQgLgMgSAAQgUAAgLALQgLALAAAcIAAApIhJAAIAAgmQAAg9AdggQAeggA5AAQA7AAAeAhQAdAgAAA+IAAANQAABQg3AXQAeANANAZQAMAbAAAnIAAAoQAAA9gdAhQgeAgg7AAQg6AAgegggARHD8IAAhNIBMAAIAABNgAM2D8IAAn2IB1AAQA7AAAdAgQAeAfAAA9IAABCQAAA8geAfQgdAfg7AAIgmAAIAAC+gAOFgHIAmAAQASAAALgLQAJgKAAgbIAAhMQAAgbgJgKQgLgKgSAAIgmAAgALCD8IgPhcIhhAAIgNBcIhJAAIBRn2IB0AAIBQH2gAJcBcIBNAAIgmj9gADnD8IAAn2IDeAAIAABIIiPAAIAACBIAuAAQA8AAAeAfQAdAeAAA9IAAA2QAAA9gdAgQgeAgg8AAgAE2C0IAuAAQASAAALgKQALgKAAgcIAAhAQAAgbgLgKQgLgKgSAAIguAAgABdD8IAAn2IBPAAIAAH2gAi5D8IAAn2IBPAAIAAC9IAlAAQA9AAAaAgQAdAdABA+IAABBQgBA9gdAgQgaAgg9AAgAhqC0IAlAAQATAAALgKQAJgKAAgcIAAhLQAAgcgJgKQgLgKgTAAIglAAgAneD8IAAn2IB4AAQA9AAAcAcQAcAdAAA7IAAASQAAAngMAZQgMAZgbAMQAhAMANAaQANAcAAAoIAAApQAAA7geAeQgeAfg8AAgAmOC0IAtAAQAUAAAKgLQALgLAAgcIAAgsQAAgjgMgNQgMgNgbAAIgjAAgAmOgtIAeAAQAXAAAMgMQANgLAAgeIAAgcQAAgcgKgMQgJgMgVAAIgmAAgArBD8IgPhcIhhAAIgNBcIhJAAIBRn2IB0AAIBQH2gAsnBcIBNAAIgmj9gARQCMIgKi0IAAjSIBPAAIAADSIgLC0g");
	mask.setTransform(-0.2,65.7);

	// Layer 2
	this.instance = new lib.Symbol15();
	this.instance.setTransform(32.7,-19.8,2.672,1.238);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AglD7IAAhMIBKAAIAABMgAgcCMIgKi0IAAjTIBNAAIAADTIgKC0g");
	this.shape.setTransform(115.1,69.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ah0D7IAAn2IB0AAQA7ABAdAgQAdAfAAA9IAABCQAAA8gdAfQgdAfg7AAIglAAIAAC9gAglgIIAlAAQARABALgLQAJgKAAgcIAAhLQAAgbgJgKQgLgLgRAAIglAAg");
	this.shape_1.setTransform(95.7,69.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AA7D7IgPhbIhfAAIgOBbIhIAAIBRn2IByAAIBQH2gAgoBcIBJAAIgjj+g");
	this.shape_2.setTransform(66.5,69.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ah5D7IAAn2IDcAAIAABIIiNAAIAACCIAsAAQA8gBAeAgQAeAeAAA9IAAA2QAAA9geAgQgeAgg8gBgAgqCzIAsAAQATAAALgKQALgJAAgcIAAhAQAAgbgLgKQgLgLgTABIgsAAg");
	this.shape_3.setTransform(37.1,69.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ABkD7IAAn2IBPAAIAAH2gAiyD7IAAn2IBPAAIAAC+IAmAAQA7AAAcAfQAdAeAAA9IAABCQAAA9gdAgQgcAgg7gBgAhjCzIAmAAQASAAALgKQAJgJAAgcIAAhLQAAgcgJgKQgLgKgSAAIgmAAg");
	this.shape_4.setTransform(1.1,69.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ah5D7IAAn2IB4AAQA7AAAcAdQAcAdAAA6IAAASQAAAogMAYQgNAZgaANQAgAMANAaQAOAcAAAoIAAApQAAA6geAfQgfAeg7AAgAgqCzIAsAAQAUAAAKgLQALgKAAgcIAAgsQAAgjgMgNQgMgOgZAAIgkAAgAgqguIAfAAQAVAAAMgLQANgLAAgfIAAgcQAAgbgKgMQgKgNgSAAIgnAAg");
	this.shape_5.setTransform(-33.9,69.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AA7D7IgPhbIhfAAIgOBbIhIAAIBRn2IByAAIBQH2gAgoBcIBJAAIgjj+g");
	this.shape_6.setTransform(-74.8,69.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhXDhQgeghAAg9IAAg4IBLAAIAAA9QAAAbAMALQAKAMATAAQARAAALgMQAMgMAAghIAAgoQAAgjgNgPQgMgOgZAAIgUAAIAAhGIAYAAQAUAAANgMQANgLAAgeIAAgcQAAgigMgMQgLgMgRAAQgSAAgMALQgLALAAAcIAAApIhJAAIAAgmQAAg9AdggQAdggA5AAQA6AAAdAhQAeAgAAA+IAAANQAABQg3AXQAfANAMAZQAMAbAAAnIAAAoQAAA9geAhQgdAgg6AAQg4AAgfggg");
	this.shape_7.setTransform(-103.7,69.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,28.6,244.1,79);


(lib.Symbol12 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoaEcIAAg4IiMAAIAAA4IhBAAIAAhzIAaAAQAIgKAEgNQADgNABgTIAPkwIC5AAIAAFnIAcAAIAABzgAp8BxQgCAYgEAMQgEAMgJAIIBXAAIAAkrIg4AAgAmeDNQgZgbAAgzIAAguIA+AAIAAAyQAAAXAJAKQAKAJAQAAQAPAAAKgJQAIgKABgcIAAghQgBgegJgMQgLgMgWAAIgRAAIAAg6IAUAAQASAAALgKQALgJAAgaIAAgWQgBgdgIgKQgKgKgPAAQgQABgKAIQgJAJAAAXIAAAjIg9AAIAAggQAAgyAYgbQAZgbAwAAQAxAAAYAcQAZAbAAAyIAAAMQAABDgtARQAZALALAWQAKAXgBAgIAAAhQAAAzgZAbQgYAbgxAAQgwAAgZgbgAEvDlIAAg8QAZADAOgHQAOgHAFgWIAAgEIhblCIBCAAIAkCPIAUBhIAPhgIAfiQIBEAAIhGE3QgGAdgJAVQgIAVgPANQgPAOgXAGQgQAEgWAAIgTAAgAKsDkIAAkmIhSEmIhDAAIAAmiIA6AAIAAEIIAZhaIA2iuIBIAAIAAGigAC/DkIhAioIgUAnIAACBIhCAAIAAmiIBCAAIAAC3IBXi3IBBAAIhbC7IBbDngAhHDkIAAirIgWAAQgXAAgKAMQgLAMABAeIAABBIgBAWIgBANIgDAJIgCAIIhDAAQAEgMACgMQABgMAAgPIAAhBQABghAIgXQAKgXAZgKQgrgVAAg+IAAgiQAAgwAXgYQAXgYAzAAIBkAAIAAGigAiAh4QgIAKAAAYIAAAoQAAAaAKAJQALAKASAAIAaAAIAAiBIgfAAQgSAAgIAKgAJNjrQgRgSgBgeIApAAQABAQAHAFQAHAGANAAQAOAAAIgGQAHgFABgQIAoAAQAAAegRASQgSASgjAAQgjAAgQgSg");
	mask.setTransform(-0.8,-0.4);

	// Layer 2
	this.instance = new lib.Symbol15();
	this.instance.setTransform(32.7,-19.8,2.373,1.099);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAtEAIAAkmIgbBmIg2DAIhDAAIAAmiIA7AAIAAEIIAYhcIA0isIBIAAIAAGigAgxjPQgQgSgCgeIApAAQABAQAHAGQAHAFALAAQAOAAAIgFQAHgGABgQIApAAQAAAegSASQgRASgkAAQggAAgRgSg");
	this.shape.setTransform(65.2,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhUDRIAAg7QAZACAPgGQAOgHAEgXIABgDIhclCIBCAAIAkCPIASBhIAQhgIAeiQIBFAAIhHE3QgGAcgJAVQgIAWgPANQgNAOgXAGQgQAEgWAAIgTgBg");
	this.shape_1.setTransform(40.1,5.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AApDSIg+ioIgVAnIAACBIhCAAIAAmjIBCAAIAAC4IBVi4IBCAAIhcC7IBcDog");
	this.shape_2.setTransform(16.3,5.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAkDSIAAirIgWAAQgVgBgLAMQgKAMAAAeIAABCIAAAVIgBAOIgCAIIgDAJIhDAAQAFgMABgMQACgMAAgQIAAhAQAAgiAJgWQAJgXAZgLQgrgSAAhBIAAghQAAgwAXgYQAXgZAyAAIBjAAIAAGjgAgTiLQgIALAAAXIAAApQAAAaAKAJQALAJAQAAIAaAAIAAiAIgfAAQgQgBgIAKg");
	this.shape_3.setTransform(-9.7,5.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhIC7QgZgbAAgzIAAguIA/AAIAAAyQAAAXAJAJQAJAKAQAAQANAAAKgKQAJgKAAgcIAAghQAAgdgKgMQgLgMgUAAIgRAAIAAg6IAUAAQARAAAKgKQALgJAAgaIAAgXQAAgcgJgKQgKgKgNAAQgQAAgKAJQgJAJAAAXIAAAjIg9AAIAAggQAAgzAZgaQAYgbAvAAQAwAAAZAbQAZAbAAAzIAAALQAABEguATQAZAKALAVQAKAXAAAgIAAAhQAAAzgZAbQgZAbgwAAQgvAAgZgbg");
	this.shape_4.setTransform(-33,5.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ABFDuIAAg5IiKAAIAAA5IhBAAIAAh0IAaAAQAJgKADgNQADgNABgSIAPkxIC3AAIAAFnIAdAAIAAB0gAgbBDQgBAYgFAMQgEAMgIAHIBUAAIAAkrIg2AAg");
	this.shape_5.setTransform(-59.7,8.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.2,-29.2,156.5,66.5);


(lib.Symbol11copy = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.t3 = new lib.Symbol40();
	this.t3.setTransform(24,27);

	this.timeline.addTween(cjs.Tween.get(this.t3).wait(1));

	// Layer 2
	this.t2 = new lib.Symbol12copy3();
	this.t2.setTransform(-113.9,25.8);

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

	// Layer 1 copy
	this.t1 = new lib.Symbol12copy2();
	this.t1.setTransform(0.1,-35.2);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-239.2,-123.9,401.8,206.2);


(lib.Symbol11 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.t2 = new lib.Symbol12copy();
	this.t2.setTransform(0.1,-35.2);

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

	// Layer 1 copy
	this.t1 = new lib.Symbol12();
	this.t1.setTransform(0.1,-35.2);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-261.2,-191.2,587.9,272.5);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t1.png
	this.t1 = new lib.Symbol8();
	this.t1.setTransform(-218,-185);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// t2.png
	this.t2 = new lib.Symbol10();
	this.t2.setTransform(112,-184);

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

	// t3.png
	this.t3 = new lib.Symbol9();
	this.t3.setTransform(251,-187);

	this.timeline.addTween(cjs.Tween.get(this.t3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-293,-204,608,37);


(lib.Symbol4 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol35();
	this.instance.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-200,240,400);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mc = new lib.Symbol4();

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-200,240,400);


(lib.blk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol1();
	this.instance.setTransform(0,0,0.6,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AyufPMAAAg+dMAldAAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-200,240,400);


(lib.content = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var r = this;
		var count = 1;
		var repeat = 200;
		
		TweenMax.to(r.light.mc, 3.2, {alpha:0.5, yoyo:true, repeat:-1, repeatDelay:0.0, ease:RoughEase.ease.config({ template:  Power0.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: true})})
		
		
		var tl = new TimelineMax();
		tl.set([r.n1.t, r.n2.t, r.n3.t, r.n4.t], {alpha:0})
		  .set([r.n1.light, r.n2.light, r.n3.light, r.n4.light], {alpha:0})
		  .set([r.btn1, r.btn2, r.btn3, r.btn4], {y:1000})
		  .set([r.n1.ar, r.n2.ar, r.n3.ar, r.n4.ar], {scaleX:0, scaleY:0, y:10})
		  .set(r.bot, {x:-600})
		  .set([r.t3, r.t4], {x:-600})
		  .set(r.light, {alpha:0})
		  .to(r.blk, 1.0, {alpha:0, ease:Power0.easeNone}, 0.0)
		  .from(r.bg, 1.7, {scaleX:3, scaleY:3, ease:Expo.easeOut}, 0.0)
		  //.from(r.bot, 2.3, {scaleX:3, scaleY:3, ease:Expo.easeOut}, 0.0)
		  //
		  
		  .from(r.t1, 2.0, {scaleX:2, scaleY:2, ease:Expo.easeOut}, 1.0)
		  .from(r.t1.t1, 1.0, {y:"+=150", scaleX:2, scaleY:2, alpha:0, ease:Expo.easeOut}, 1.0)
		  .from(r.t1.t2, 1.5, {y:"+=350", scaleX:2, scaleY:2, alpha:0, ease:Expo.easeOut}, 1.1)
		  
		  .from(r.t2.t1, 1.5, {x:"-=360", rotation:"+=1", ease:Expo.easeOut}, 1.2)
		  .from(r.t2.t2, 1.2, {x:"+=460", rotation:"+=1", ease:Expo.easeOut}, 1.4)
		  .from(r.t2.t3, 1.5, {x:"+=460",  rotation:"+=1", ease:Expo.easeOut}, 1.6)
		  
		  .staggerFrom([r.b1, r.b2, r.b3, r.b4], 2.0, {x:"-=700", rotation:0.2, ease:Expo.easeOut}, 0.1, 2.0)
		  .staggerFrom([r.n1, r.n2, r.n3, r.n4], 1.5, {y:"-=30", alpha:0, ease:Expo.easeOut}, 0.1, 3.0)
		  
		  .call(userReaction)
		  //.call(replay)
		  //.to(r.blk, 0.9, {alpha:1, ease:Power0.easeNone, onComplete:restart}, 13)
		  ;
		
		function userReaction() {
			console.log("userReaction");
			TweenMax.set([r.btn1, r.btn2, r.btn3, r.btn4], {y:80});
			//hovers
			r.btn1.addEventListener("rollover", glowUp1);
			r.btn1.addEventListener("rollout", glowDown1);
			r.btn2.addEventListener("rollover", glowUp2);
			r.btn2.addEventListener("rollout", glowDown2);
			r.btn3.addEventListener("rollover", glowUp3);
			r.btn3.addEventListener("rollout", glowDown3);
			r.btn4.addEventListener("rollover", glowUp4);
			r.btn4.addEventListener("rollout", glowDown4);
			//clicks
			r.btn1.addEventListener("click", click1);
			r.btn2.addEventListener("click", click2);
			r.btn3.addEventListener("click", click3);
			r.btn4.addEventListener("click", click4);
			
			
			
		}
		function glowUp1() {
			console.log("1");
			TweenMax.to(r.n1.t, 0.4, {alpha:1, ease:Expo.easeOut, overwrite:true})
			TweenMax.to(r.n1.w, 0.4, {alpha:0, ease:Expo.easeOut, overwrite:true})
			TweenMax.to(r.n1, 0.4, {y:-50, scaleX:1.2, scaleY:1.2, ease:Expo.easeOut, overwrite:true})
			TweenMax.to(r.n1.ar, 0.4, {scaleX:1, scaleY:1, y:20, ease:Expo.easeOut, overwrite:true})
			TweenMax.to(r.n1.light, 0.4, {alpha:1, ease:Expo.easeOut, overwrite:true})
		}
		function glowDown1() {
			TweenMax.to(r.n1.t, 0.4, {alpha:0, ease:Expo.easeOut, overwrite:true})
			TweenMax.to(r.n1.w, 0.4, {alpha:1, ease:Expo.easeOut, overwrite:true})
			TweenMax.to(r.n1, 0.4, {y:-45, scaleX:1.0, scaleY:1.0, ease:Expo.easeOut, overwrite:true})
			TweenMax.to(r.n1.ar, 0.4, {scaleX:0, scaleY:0, y:10, ease:Expo.easeOut, overwrite:true})
			TweenMax.to(r.n1.light, 0.4, {alpha:0, ease:Expo.easeOut, overwrite:true})
		}
		function glowUp2() {
			console.log("2");
			TweenMax.to(r.n2.t, 0.4, {alpha:1, ease:Expo.easeOut, overwrite:true})
			TweenMax.to(r.n2.w, 0.4, {alpha:0, ease:Expo.easeOut, overwrite:true})
			TweenMax.to(r.n2, 0.4, {y:-50, scaleX:1.2, scaleY:1.2, ease:Expo.easeOut, overwrite:true})
			TweenMax.to(r.n2.ar, 0.4, {scaleX:1, scaleY:1, y:20, ease:Expo.easeOut, overwrite:true})
			TweenMax.to(r.n2.light, 0.4, {alpha:1, ease:Expo.easeOut, overwrite:true})
		}
		function glowDown2() {
			TweenMax.to(r.n2.t, 0.4, {alpha:0, ease:Expo.easeOut, overwrite:true})
			TweenMax.to(r.n2.w, 0.4, {alpha:1, ease:Expo.easeOut, overwrite:true})
			TweenMax.to(r.n2, 0.4, {y:-45, scaleX:1.0, scaleY:1.0, ease:Expo.easeOut, overwrite:true})
			TweenMax.to(r.n2.ar, 0.4, {scaleX:0, scaleY:0, y:10, ease:Expo.easeOut, overwrite:true})
			TweenMax.to(r.n2.light, 0.4, {alpha:0, ease:Expo.easeOut, overwrite:true})
		}
		function glowUp3() {
			console.log("3");
			TweenMax.to(r.n3.t, 0.4, {alpha:1, ease:Expo.easeOut, overwrite:true})
			TweenMax.to(r.n3.w, 0.4, {alpha:0, ease:Expo.easeOut, overwrite:true})
			TweenMax.to(r.n3, 0.4, {y:-50, scaleX:1.2, scaleY:1.2, ease:Expo.easeOut, overwrite:true})
			TweenMax.to(r.n3.ar, 0.4, {scaleX:1, scaleY:1, y:30, ease:Expo.easeOut, overwrite:true})
			TweenMax.to(r.n3.light, 0.4, {alpha:1, ease:Expo.easeOut, overwrite:true})
		}
		function glowDown3() {
			TweenMax.to(r.n3.t, 0.4, {alpha:0, ease:Expo.easeOut, overwrite:true})
			TweenMax.to(r.n3.w, 0.4, {alpha:1, ease:Expo.easeOut, overwrite:true})
			TweenMax.to(r.n3, 0.4, {y:-45, scaleX:1.0, scaleY:1.0, ease:Expo.easeOut, overwrite:true})
			TweenMax.to(r.n3.ar, 0.4, {scaleX:0, scaleY:0, y:20, ease:Expo.easeOut, overwrite:true})
			TweenMax.to(r.n3.light, 0.4, {alpha:0, ease:Expo.easeOut, overwrite:true})
		}
		function glowUp4() {
			console.log("4");
			TweenMax.to(r.n4.t, 0.4, {alpha:1, ease:Expo.easeOut, overwrite:true})
			TweenMax.to(r.n4.w, 0.4, {alpha:0, ease:Expo.easeOut, overwrite:true})
			TweenMax.to(r.n4, 0.4, {y:-50, scaleX:1.2, scaleY:1.2, ease:Expo.easeOut, overwrite:true})
			TweenMax.to(r.n4.ar, 0.4, {scaleX:1, scaleY:1, y:20, ease:Expo.easeOut, overwrite:true})
			TweenMax.to(r.n4.light, 0.4, {alpha:1, ease:Expo.easeOut, overwrite:true})
		}
		function glowDown4() {
			TweenMax.to(r.n4.t, 0.4, {alpha:0, ease:Expo.easeOut, overwrite:true})
			TweenMax.to(r.n4.w, 0.4, {alpha:1, ease:Expo.easeOut, overwrite:true})
			TweenMax.to(r.n4, 0.4, {y:-45, scaleX:1.0, scaleY:1.0, ease:Expo.easeOut, overwrite:true})
			TweenMax.to(r.n4.ar, 0.4, {scaleX:0, scaleY:0, y:10, ease:Expo.easeOut, overwrite:true})
			TweenMax.to(r.n4.light, 0.4, {alpha:0, ease:Expo.easeOut, overwrite:true})
		}
		
		function killListeners() {
			console.log("killListeners");
			//hovers
			r.btn1.removeEventListener("rollover", glowUp1);
			r.btn1.removeEventListener("rollout", glowDown1);
			r.btn2.removeEventListener("rollover", glowUp2);
			r.btn2.removeEventListener("rollout", glowDown2);
			r.btn3.removeEventListener("rollover", glowUp3);
			r.btn3.removeEventListener("rollout", glowDown3);
			r.btn4.removeEventListener("rollover", glowUp4);
			r.btn4.removeEventListener("rollout", glowDown4);
			//clicks
			r.btn1.removeEventListener("click", click1);
			r.btn2.removeEventListener("click", click2);
			r.btn3.removeEventListener("click", click3);
			r.btn4.removeEventListener("click", click4);
			//move buttons away
			TweenMax.set([r.btn1, r.btn2, r.btn3, r.btn4], {y:1000})
			//textUp
			TweenMax.staggerTo([r.t1.t1, r.t1.t2, r.t2.t1, r.t2.t2, r.t2.t3], 0.5, {y:"-=400", ease:Expo.easeIn, delay:0.0}, 0.05)
			
			TweenMax.to(r.bot, 1.3, {x:90, ease:Expo.easeInOut, delay:0.2})
			TweenMax.to(r.light, 2.3, {alpha:1, ease:Power0.easeNone, delay:1.0})
			
			var tm = new TimelineMax();
			tm.set([r.t3, r.t4], {x:-130})
			  .staggerFrom([r.t3.t1, r.t3.t2], 1.5, {x:"-=600", ease:Expo.easeOut}, 0.1, 1.1)
			  .staggerTo([r.t3.t2, r.t3.t1], 0.5, {y:"+=70", alpha:0, ease:Back.easeIn}, 0.1, 4.0)
			  .staggerFrom([r.t4.t3, r.t4.t2, r.t4.t1], 0.5, {y:"-=70", alpha:0, ease:Back.easeOut}, 0.1, 4.5)
			  
			  .to(r.t4.t3, 0.5, {scaleX:1.2, scaleY:1.2, ease:Expo.easeOut}, 6.0)
			  .to(r.t4.t3, 1.5, {scaleX:1.0, scaleY:1.0, ease:Elastic.easeOut}, 6.5)
			  .to(r.t4.t1, 0.5, {y:"-=10", ease:Expo.easeOut}, 6.0)
			  .to(r.t4.t1, 1.5, {y:"+=10", ease:Elastic.easeOut}, 6.5)
			  .to(r.t4.t2, 0.5, {x:"-=30", ease:Expo.easeOut}, 6.0)
			  .to(r.t4.t2, 1.5, {x:"+=30", ease:Elastic.easeOut}, 6.5)
			  ;
		}
		
		
		function click1() {
			killListeners();
			console.log("click1");
			TweenMax.staggerTo([r.b4, r.b3, r.b2], 0.5, {x:"-=700", rotation:0.2, ease:Expo.easeIn, delay:0.0}, 0.05)
			TweenMax.staggerTo([r.n4, r.n3, r.n2], 0.5, {x:"-=700", rotation:0.2, ease:Expo.easeIn, delay:0.1}, 0.05)
			TweenMax.to(r.b1, 1.0, {x:190, y:140, scaleX:1.4, scaleY:1.4, ease:Expo.easeInOut, delay:0.0})
			TweenMax.to(r.n1, 1.3, {x:190, y:-145, scaleX:1.5, scaleY:1.5, ease:Expo.easeInOut, delay:0.05})
			TweenMax.to(r.n1.light, 1.3, {scaleX:1.0, scaleY:1.0, ease:Expo.easeInOut, overwrite:true})
			TweenMax.to(r.n1.w, 1.3, {alpha:0, ease:Expo.easeInOut, overwrite:true})
		}
		function click2() {
			killListeners();
			console.log("click2");
			TweenMax.staggerTo([r.b4, r.b3], 0.5, {x:"-=700", rotation:0.2, ease:Expo.easeIn, delay:0.0}, 0.05)
			TweenMax.staggerTo([r.n4, r.n3], 0.5, {x:"-=700", rotation:0.2, ease:Expo.easeIn, delay:0.1}, 0.05)
			TweenMax.staggerTo([r.b1, r.n1], 0.5, {x:"+=700", rotation:0.2, ease:Expo.easeIn, delay:0.0}, 0.05)
			TweenMax.to(r.b2, 1.0, {x:190, y:140, scaleX:1.4, scaleY:1.4, ease:Expo.easeInOut, delay:0.0})
			TweenMax.to(r.n2, 1.3, {x:190, y:-105, scaleX:1.5, scaleY:1.5, ease:Expo.easeInOut, delay:0.05})
			TweenMax.to(r.n2.light, 1.3, {scaleX:1.0, scaleY:1.0, ease:Expo.easeInOut, overwrite:true})
			TweenMax.to(r.n2.w, 1.3, {alpha:0, ease:Expo.easeInOut, overwrite:true})
		}
		function click3() {
			killListeners();
			console.log("click3");
			TweenMax.staggerTo([r.b1, r.b2], 0.5, {x:"+=700", rotation:0.2, ease:Expo.easeIn, delay:0.0}, 0.05)
			TweenMax.staggerTo([r.n1, r.n2], 0.5, {x:"+=700", rotation:0.2, ease:Expo.easeIn, delay:0.1}, 0.05)
			TweenMax.staggerTo([r.b4, r.n4], 0.5, {x:"-=700", rotation:0.2, ease:Expo.easeIn, delay:0.0}, 0.05)
			TweenMax.to(r.b3, 1.0, {x:190, y:140, scaleX:1.4, scaleY:1.4, ease:Expo.easeInOut, delay:0.0})
			TweenMax.to(r.n3, 1.3, {x:190, y:-145, scaleX:1.5, scaleY:1.5, ease:Expo.easeInOut, delay:0.05})
			TweenMax.to(r.n3.light, 1.3, {scaleX:1.0, scaleY:1.0, ease:Expo.easeInOut, overwrite:true})
			TweenMax.to(r.n3.w, 1.3, {alpha:0, ease:Expo.easeInOut, overwrite:true})
		}
		function click4() {
			killListeners();
			console.log("click4");
			TweenMax.staggerTo([r.b1, r.b2, r.b3], 0.5, {x:"+=700", rotation:0.2, ease:Expo.easeIn, delay:0.0}, 0.05)
			TweenMax.staggerTo([r.n1, r.n2, r.n3], 0.5, {x:"+=700", rotation:0.2, ease:Expo.easeIn, delay:0.1}, 0.05)
			TweenMax.to(r.b4, 1.0, {x:190, y:140, scaleX:1.4, scaleY:1.4, ease:Expo.easeInOut, delay:0.0})
			TweenMax.to(r.n4, 1.3, {x:190, y:-90, scaleX:1.5, scaleY:1.5, ease:Expo.easeInOut, delay:0.05})
			TweenMax.to(r.n4.light, 1.3, {scaleX:1.0, scaleY:1.0, ease:Expo.easeInOut, overwrite:true})
			TweenMax.to(r.n4.w, 1.3, {alpha:0, ease:Expo.easeInOut, overwrite:true})
		}
		
		
		
		
		function replay() {
		  if (count == repeat){
			  tl.kill();
			  TweenMax.killAll();
			  createjs.Ticker.setFPS(1);
		  } else {
		  if (count != repeat) {
			  count++;
			  tl.play();
		  }
		  }
		}
		
		function restart() {
			tl.play(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	this.shape.setTransform(0,0,2.75,1.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// blk
	this.blk = new lib.blk();
	this.blk.setTransform(0,0,2.75,1.15);

	this.timeline.addTween(cjs.Tween.get(this.blk).wait(1));

	// warn
	this.instance = new lib.Symbol17();
	this.instance.setTransform(0,202);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// t1
	this.t1 = new lib.Symbol54();
	this.t1.setTransform(-43.7,-151.8);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// t2
	this.t2 = new lib.Symbol7();

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

	// btn1234
	this.btn4 = new lib.Symbol27copy3();
	this.btn4.setTransform(-226.4,80);
	new cjs.ButtonHelper(this.btn4, 0, 1, 2, false, new lib.Symbol27copy3(), 3);

	this.btn3 = new lib.Symbol27copy2();
	this.btn3.setTransform(-77.4,80);
	new cjs.ButtonHelper(this.btn3, 0, 1, 2, false, new lib.Symbol27copy2(), 3);

	this.btn2 = new lib.Symbol27copy();
	this.btn2.setTransform(72.6,80);
	new cjs.ButtonHelper(this.btn2, 0, 1, 2, false, new lib.Symbol27copy(), 3);

	this.btn1 = new lib.Symbol27();
	this.btn1.setTransform(230.6,80);
	new cjs.ButtonHelper(this.btn1, 0, 1, 2, false, new lib.Symbol27(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn1},{t:this.btn2},{t:this.btn3},{t:this.btn4}]}).wait(1));

	// b1234
	this.b1 = new lib.Symbol18();
	this.b1.setTransform(229.5,150,1,1,0,0,0,0.5,63);

	this.b2 = new lib.Symbol19();
	this.b2.setTransform(72.5,150,1,1,0,0,0,-0.5,50);

	this.b3 = new lib.Symbol20();
	this.b3.setTransform(-77,150,1,1,0,0,0,-1,59);

	this.b4 = new lib.Symbol21();
	this.b4.setTransform(-225,150,1,1,0,0,0,-1,46);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b4},{t:this.b3},{t:this.b2},{t:this.b1}]}).wait(1));

	// n1234
	this.n1 = new lib.Symbol25();
	this.n1.setTransform(227,-45);

	this.n2 = new lib.Symbol24();
	this.n2.setTransform(72,-45);

	this.n3 = new lib.Symbol23();
	this.n3.setTransform(-75,-45);

	this.n4 = new lib.Symbol22();
	this.n4.setTransform(-220,-45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.n4},{t:this.n3},{t:this.n2},{t:this.n1}]}).wait(1));

	// t4
	this.t4 = new lib.Symbol11copy();
	this.t4.setTransform(-130,-8);

	this.timeline.addTween(cjs.Tween.get(this.t4).wait(1));

	// t3
	this.t3 = new lib.Symbol11();
	this.t3.setTransform(-130,-8);

	this.timeline.addTween(cjs.Tween.get(this.t3).wait(1));

	// bot
	this.bot = new lib.bot();
	this.bot.setTransform(90,11);

	this.timeline.addTween(cjs.Tween.get(this.bot).wait(1));

	// light
	this.light = new lib.Symbol2();
	this.light.setTransform(89,-30);
	this.light.alpha = 0.398;
	this.light.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.light).wait(1));

	// bg
	this.bg = new lib.Symbol3();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-391.2,-231,722.2,462);


// stage content:
(lib.km_660x460 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgziAj7MAAAhH1MBnFAAAMAAABH1g");
	mask.setTransform(330,230);

	// movie
	this.rolik = new lib.content();
	this.rolik.setTransform(330,230);

	this.rolik.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.rolik).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(330,230,660,460);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;