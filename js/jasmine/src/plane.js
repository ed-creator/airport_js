var Plane = function() {
  this.flying = true
}

Plane.prototype.takeOff = function() {
  if (this.flying) {throw ('Plane cannot take off: plane already flying');
  };
};

Plane.prototype.isLanded = function() {
  return !(this.flying);
};

Plane.prototype.land = function(airport) {
  if (this.isLanded()) {throw ('Plane cannot land: plane already landed')};
  this.airport = airport
  this.flying = !this.flying
};
Plane.prototype.getAirport = function() {
  if (this.flying) {throw ('Plane cannot be at an airport: plane already flying')};
  return this.airport;
};
