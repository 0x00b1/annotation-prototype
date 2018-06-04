define(
    [
        "../compat"
    ],
    function (compat) {
        function BaseSegmentation(image, options) {
            if (!(image instanceof ImageData)) {
                throw "Invalid ImageData";
            }

            this.imageData = compat.createImageData(image.width, image.height);

            this.imageData.data.set(image.data);
        }

        BaseSegmentation.prototype.finer = function () {

        };

        BaseSegmentation.prototype.coarser = function () {

        };

        return BaseSegmentation;
    }
);
