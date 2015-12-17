"use strict";

var Events = function (obj, blockGlobalRemoval) {

	var events = obj || {}; 

	var listeners = {}, contexts = {}, triggerLocks = {}, triggerLock = false;
	var toRemove = [], numToRemove;
	var toCall = [], numToCall;
	var preventGlobalListeners = [];
	var REMOVE = "r", CALL = "c";

	events.on = function (event, callback, context, noGlobal) {
		if(!listeners[event]) listeners[event] = [];
		listeners[event].push(callback);
		if(context) contexts[callback] = context;
		if(noGlobal) preventGlobalListeners.push(callback);
	};

	events.off = function (event, callback, deffered) {
		if(!deffered) {
			if(listeners[event]) {
				listeners[event].splice(callback, 1);
			}
		} else {
			toRemove.push(arguments);
			numToRemove = toRemove.length;
		}
	};

	if(!blockGlobalRemoval) {
		events.offAll = function(event, deffered) {
			var es = listeners[event];
			var esl = es.length;
			for(var i = 0; i < esl; i++) {
				if (preventGlobalListeners.indexOf(es[i]) === -1) {
					events.off(event, es[i], deffered);
				}
			}
		}
	}

	events.trigger = function (event, data, deffered) {
		if (triggerLocks[event] && triggerLocks[event] > 1) {
			triggerLocks[event]--;
			return;
		} else if (triggerLocks[event]) {
			triggerLocks[event] = 1;
		}

		if(deffered && triggerLock) {
			toCall.push(arguments);
			numToCall = toCall.length;
			return;
		}

		if(listeners[event]) {
			triggerLock = true;
			var i = 0, nl = listeners[event].length;
			while(i < nl) {
				var f = listeners[event][i];
				f.call(contexts[f], data);
				i++;
			}
			triggerLock = false;
		}

		if(numToRemove > 0) {
			for(var i = 0; i < numToRemove; i++) {
				var r = toRemove[i];
				events.off(r[0], r[1], false);
			}
			toRemove = [];
			numToRemove = 0;
		}

		if(numToCall > 0) {
			var nc = toCall.shift();
			numToCall = toCall.length;
			events.trigger(nc[0], nc[1]);
		}
	}

	events.addTriggerLockNum = function(event) {
		// console.log('Events.addTriggerLockNum for: ' + event);
		if(!triggerLocks[event]) triggerLocks[event] = 1;
		triggerLocks[event]++;
	}

	events.clearTriggerLockNums = function(event) {
		if(triggerLocks[event]) triggerLocks[event] = null;
	}

	return events;

};
