Interceptor.attach(ObjC.classes.NSFileManager['- fileExistsAtPath:'].implementation, {
    onEnter: function (args) {

        this.fpath = ObjC.Object(args[2]).toString();
        console.log("FridaScript: "+this.fpath)
        }
});
