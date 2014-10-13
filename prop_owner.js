  // function is built on Obj.prototype for ever object to inherit it
Object.prototype.findOwnerProperty = function(propName){
  // we'll start looking for property of actual object that this method is called upon
  var currentObject = this;
  // we'll keep searching the prototype chain until we've tried to go
  // beyond the Object prototype which has no prototype. Trying to access it
  // would produce *null*
  while (currentObject !== null){
    if (currentObject.hasOwnProperty(propName)) {
      // if the currently examined Object has the property, return that Object
      return currentObject;
    } else {
      // Otherwise, we set the currently examined Object to be the previously
      // examined Object's prototype.
      currentObject = currentObject.__proto__;
    }
  }
  return "No property found!";
};

  // possible use case:
  // testObj.findOwnerOfProperty("testProperty")