// JavaScript source code

QUnit.test("Button Creation", function (assert) {
    assert.ok(document.getElementById("button1"), "button 1 created");
    assert.ok(document.getElementById("button2"), "button 2 created");
});
QUnit.test("Button 1 Function", function (assert) {
    document.getElementById("button1").click();
    assert.ok(document.getElementById("Q0"), "button 1 works");
    assert.ok(document.getElementById("A0"), "button 1 works");
});
