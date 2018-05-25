class locations {
	constructor(public img,public name, public address,public code ){

	}


	render(){
		
	loc = document.createElement("div");
 	loc.classList.add("obj");
 	loc.classList.add("col-lg-3");
 	loc.classList.add("col-md-6");
 	loc.classList.add("text-center");
 	row = document.getElementById("cont");
 	row.appendChild(loc);

 	var image= document.createElement("IMG");
    image.setAttribute("src", this.img);
    image.setAttribute("width", "250");
    image.setAttribute("height", "228");
	loc.appendChild(image);

 	var name = document.createElement("h4");
 	var name_name = document.createTextNode(this.name);
 	name.appendChild(name_name);
 	loc.appendChild(name);

 	var address = document.createElement("p");
 	var address_loc = document.createTextNode(this.address);
 	address.appendChild(address_loc);
 	loc.appendChild(address);

 	var code = document.createElement("p");
 	var code_text = document.createTextNode(this.code);
 	code.appendChild(code_text);
 	loc.appendChild(code);
 	
	}
}
	class Restaurants extends locations{
	constructor(img,name,address,code,PhN,link){
		super(img,name,address,code);
		this.PhN=PhN;
		this.link=link;
}
render(){
		
	loc = document.createElement("div");
 	loc.classList.add("obj");
 	loc.classList.add("col-lg-3");
 	loc.classList.add("col-md-6");
 	loc.classList.add("text-center");
 	row = document.getElementById("cont");
 	row.appendChild(loc);

 	var image= document.createElement("IMG");
    image.setAttribute("src", this.img);
    image.setAttribute("width", "250");
    image.setAttribute("height", "228");
	loc.appendChild(image);

 	var name = document.createElement("h4");
 	var name_name = document.createTextNode(this.name);
 	name.appendChild(name_name);
 	loc.appendChild(name);

 	var address = document.createElement("p");
 	var address_loc = document.createTextNode(this.address);
 	address.appendChild(address_loc);
 	loc.appendChild(address);

 	var code = document.createElement("p");
 	var code_text = document.createTextNode(this.code);
 	code.appendChild(code_text);
 	loc.appendChild(code);

 	var PhN= document.createElement("p");
 	var PhN_nub = document.createTextNode(this.PhN);
 	PhN.appendChild(PhN_nub);
 	loc.appendChild(PhN);

 	var link = document.createElement("p");
 	var link_text = document.createTextNode(this.link);
 	link.appendChild(link_text);
 	loc.appendChild(link);

 	
	}

}
class events extends locations{
	constructor(img,name,address,time,link,price){
		super(img,name,address);
		this.time= time;
		this.price= price;
		this.link= link; 

	}
	render(){
		
	loc = document.createElement("div");
 	loc.classList.add("obj");
 	loc.classList.add("col-lg-3");
 	loc.classList.add("col-md-6");
 	loc.classList.add("text-center");
 	row = document.getElementById("cont");
 	row.appendChild(loc);

 	var image= document.createElement("IMG");
    image.setAttribute("src", this.img);
    image.setAttribute("width", "250");
    image.setAttribute("height", "228");
	loc.appendChild(image);

 	var name = document.createElement("h4");
 	var name_name = document.createTextNode(this.name);
 	name.appendChild(name_name);
 	loc.appendChild(name);

 	var address = document.createElement("p");
 	var address_loc = document.createTextNode(this.address);
 	address.appendChild(address_loc);
 	loc.appendChild(address);

 	var time = document.createElement("p");
 	var time_text = document.createTextNode(this.time);
 	time.appendChild(time_text);
 	loc.appendChild(time);

 	var link = document.createElement("p");
 	var link_text = document.createTextNode(this.link);
 	link.appendChild(link_text);
 	loc.appendChild(link);

 	var price = document.createElement("p");
 	var price_text = document.createTextNode(this.price);
 	price.appendChild(price_text);
 	loc.appendChild(price);

 	
	}

}

let locations1 = new locations("img/item1.png","St. Charles Church","Karlsplaz 1","1010 wien");
let locations2 = new locations("img/item6.png","Zoo Wien","Maxingstrasse 13b","1130 Wien");
let Restaurants1 = new Restaurants("img/item4.png","Lemon Leaf Thai Restaurant","Kettenbruckengasse 19"," 1050 Vienna","+43(1)5812308","www.lemonleaf.at");
let Restaurants2 = new Restaurants("img/item3.png","SIXTA"," Schonbrunner Strasse 21","1050 Wien","+43 1 58 528 56 l +43 1 58 528 56","http://www.sixta-restaurant.at/");
let events1= new events("img/item2.png","Kris Kristofferson","http://kriskristofferson.com/","Fr., 15. Jun. 20:00","Wiener Stadthalle, Halle F, Roland Rainer Platz 1, 1150 Wien","58,50 EUR");
let events2= new events("img/item5.png","Lenny Kravitz","www.lennykravitz.com/","Sat, 09.06.2018 - 19:30","Wiener Stadthalle - Halle D, Roland Rainer Platz 1, 1150 Wien","47,80 EUR");

}
let loc_data= [];
	loc_data.push(locations1,locations2,Restaurants1,Restaurants2,events1,events2);

for (let i=0;i < loc_data.length; i++ ){
    loc_data[i].render()


}	




