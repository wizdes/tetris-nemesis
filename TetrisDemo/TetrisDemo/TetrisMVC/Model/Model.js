function Model(typeName) {
    this.typeName = typeName;

    this.getTypeInfo = function () {
        return "basicModel";
    }

    this.run = function () {
        alert("error");
    }
}