keyController.prototype = new Controller();
keyController.prototype.constructor = keyController;
function keyController(typeName) {
    this.typeName = typeName;

    this.getTypeInfo = function () {
        return "keyController";
    }

    this.init = function() {
        document.body.onkeydown = function(e) {
            var keys = {
                37: 'left',
                39: 'right',
                40: 'down',
                38: 'rotate'
            };
            if (typeof keys[e.keyCode] != 'undefined') {
                keyPress(keys[e.keyCode]);
                render();
            }
        }
    };

    this.run = function() {
        alert("error");
    };
}