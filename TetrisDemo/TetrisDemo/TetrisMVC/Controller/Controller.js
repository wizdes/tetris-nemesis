function Controller(typeName) {
    this.typeName = typeName;

    this.getTypeInfo = function() {
        return "basicController";
    }

    this.run = function() {
        alert("error");
    }
}