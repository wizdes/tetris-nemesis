// root class
// singleton

function controller(typeName) {
    this.typeName = typeName;

    this.getTypeInfo = function() {
        return "basicController";
    }

    this.run = function() {
        alert("error");
    }
}

keyController.prototype = new controller();
keyController.prototype.constructor = keyController;
function keyController(typeName) {
    this.typeName = typeName;
}