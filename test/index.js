var tape = require("tape"),
    mixin = require("../src/index");


tape("should mixin out with objects members", function(assert) {

    assert.deepEqual(mixin({
        name: "Bob",
        age: null
    }, {
        name: null
    }, {
        age: 42
    }), {
        name: "Bob",
        age: 42
    });
    assert.end();
});
