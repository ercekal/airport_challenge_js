
DEFAULT_CAPACITY = 1;

function Airport() {
  this.hanger = [];
  this.weather = {};
}

Airport.prototype.requestLand = function(plane){
  if (this.hanger.length >= DEFAULT_CAPACITY){
    return("Capacity is full");
  } else if (this.isStormy()){
    throw new Error('cannot land during storm');
  }
  else {
    this.hanger.push(plane);
  }
};

Airport.prototype.requestTakeOff = function(plane){
  if (this.isStormy()) {
    throw new Error('cannot takeoff during storm');
  }
  else {
  this.hanger.pop(plane);
}};

Airport.prototype.isStormy = function () {
  if ((Math.random() * 100) <= 75) {
    return false;
  } else {
    return true;
  }
};
