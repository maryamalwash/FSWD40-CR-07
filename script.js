var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var locations = /** @class */ (function () {
    function locations(img, name, address, code) {
        this.img = img;
        this.name = name;
        this.address = address;
        this.code = code;
    }
    locations.prototype.render = function () {
        loc = document.createElement("div");
        loc.classList.add("obj");
        loc.classList.add("col-lg-3");
        loc.classList.add("col-md-6");
        loc.classList.add("text-center");
        row = document.getElementById("cont");
        row.appendChild(loc);
        var image = document.createElement("IMG");
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
    };
    return locations;
}());
var Restaurants = /** @class */ (function (_super) {
    __extends(Restaurants, _super);
    function Restaurants(img, name, address, code, PhN, link) {
        var _this = _super.call(this, img, name, address, code) || this;
        _this.PhN = PhN;
        _this.link = link;
        return _this;
    }
    Restaurants.prototype.render = function () {
        loc = document.createElement("div");
        loc.classList.add("obj");
        loc.classList.add("col-lg-3");
        loc.classList.add("col-md-6");
        loc.classList.add("text-center");
        row = document.getElementById("cont");
        row.appendChild(loc);
        var image = document.createElement("IMG");
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
        var PhN = document.createElement("p");
        var PhN_nub = document.createTextNode(this.PhN);
        PhN.appendChild(PhN_nub);
        loc.appendChild(PhN);
        var link = document.createElement("p");
        var link_text = document.createTextNode(this.link);
        link.appendChild(link_text);
        loc.appendChild(link);
    };
    return Restaurants;
}(locations));
var events = /** @class */ (function (_super) {
    __extends(events, _super);
    function events(img, name, address, time, link, price) {
        var _this = _super.call(this, img, name, address) || this;
        _this.time = time;
        _this.price = price;
        _this.link = link;
        return _this;
    }
    events.prototype.render = function () {
        loc = document.createElement("div");
        loc.classList.add("obj");
        loc.classList.add("col-lg-3");
        loc.classList.add("col-md-6");
        loc.classList.add("text-center");
        row = document.getElementById("cont");
        row.appendChild(loc);
        var image = document.createElement("IMG");
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
    };
    return events;
}(locations));
var locations1 = new locations("img/item1.png", "St. Charles Church", "Karlsplaz 1", "1010 wien");
var locations2 = new locations("img/item6.png", "Zoo Wien", "Maxingstrasse 13b", "1130 Wien");
var Restaurants1 = new Restaurants("img/item4.png", "Lemon Leaf Thai Restaurant", "Kettenbruckengasse 19", " 1050 Vienna", "+43(1)5812308", "www.lemonleaf.at");
var Restaurants2 = new Restaurants("img/item3.png", "SIXTA", " Schonbrunner Strasse 21", "1050 Wien", "+43 1 58 528 56 l +43 1 58 528 56", "http://www.sixta-restaurant.at/");
var events1 = new events("img/item2.png", "Kris Kristofferson", "http://kriskristofferson.com/", "Fr., 15. Jun. 20:00", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1, 1150 Wien", "58,50 EUR");
var events2 = new events("img/item5.png", "Lenny Kravitz", "www.lennykravitz.com/", "Sat, 09.06.2018 - 19:30", "Wiener Stadthalle - Halle D, Roland Rainer Platz 1, 1150 Wien", "47,80 EUR");
var loc_data = [];
loc_data.push(locations1, locations2, Restaurants1, Restaurants2, events1, events2);
for (var i = 0; i < loc_data.length; i++) {
    loc_data[i].render();
}
