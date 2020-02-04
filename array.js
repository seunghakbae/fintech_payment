var cars = [];

var car01 = {
	name : "sonata",
	ph : "500ph",
	start : function () {
		console.log("engine is starting");
	},
	stop : function () {
		console.log("engine is stoped");
	}
}

var car02 = {
	name : "BMW",
	ph : "600ph",
	start : function () {
		console.log("engine is starting");
	},
	stop : function () {
		console.log("engine is stoped");
	}
}


var car03 = {
	name : "Benz",
	ph : "700ph",
	start : function () {
		console.log("engine is starting");
	},
	stop : function () {
		console.log("engine is stoped");
	}
}

cars[0] = car01;
cars[1] = car02;
cars[2] = car03;

for(var i = 0; i < cars.length; i++){
    console.log(cars[i].name);
    console.log(cars[i].ph);
    console.log(cars);
    //cars[i].start();    
    //cars[i].stop();

}