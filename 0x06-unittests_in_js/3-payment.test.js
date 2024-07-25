const {describe, it} = require("mocha");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./3-payment");
const Utils = require("./utils");
const assert = require("assert");

describe("sendPaymentRequestToApi", function() {
    it("calcNumber from utils was used?", function() {
	const spy = sinon.spy(Utils, "calculateNumber");
	sendPaymentRequestToApi(55, 55);
	assert(spy.calledOnce);
	spy.restore();
    });
});
