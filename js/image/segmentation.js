define(
    [
        "./segmentation/slic"
    ],
    function (slic) {
        var methods = {
            slic: slic
        };

        methods.create = function (image, options) {

        options = options || {};

        options.method = options.method || "slic";

        if (!methods[options.method]) {
            throw "Invalid method: " + options.method;
        }

        return new methods[options.method](image, options);
      };

      return methods;
    }
);
