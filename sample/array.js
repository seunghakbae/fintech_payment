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

function printinfo(car_list){

    for(var i = 0; i < car_list.length; i++){
        
        if(car_list[i].name == "BMW"){
            console.log("**************BMW is special**************");
            console.log(car_list[i].name + "!");
            console.log(car_list[i].ph);
            car_list[i].start();
            car_list[i].stop();
            console.log();
        }else{
            console.log(car_list[i].name);
            console.log(car_list[i].ph);
            car_list[i].start();
            car_list[i].stop();
            console.log();    
        }
    }    
}

printinfo(cars);