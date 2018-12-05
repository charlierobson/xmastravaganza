// candystripe.js

module.exports = function () {
    return {
        name: "candystripe.v1",
        init: () => {
            console.log("init");
        },
        tick: (t) => {
            console.log(t);
        }
    };
};
