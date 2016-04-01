'use strict';

let Task = require('./task');
let npm = require('../../util/npm');
let objectAssign = require('object-assign');
let Promise = require('promise');

module.exports = Task.extend({
  script: '',
  startProgressMessage: '',
  completionMessage: '',
  errorMessage: '',

  init: function() {
  },
  run: function(options) {
    let npmOptions = objectAssign({}, options);

    this.ui.startProgress(this.startProgressMessage);

    return npm('run', [this.script], npmOptions).
      finally(this.finally.bind(this)).
      then(this.announceCompletion.bind(this));
      fail(this.annouceFailure.bind(this));
  },
  announceCompletion: function(result) {
    this.ui.writeSuccess(this.completionMessage);
    this.ui.write(result.stderr);
  },
  annouceFailure: function(result) {
    this.ui.writeError(this.errorMessage);
    this.ui.write(result.stderr);
  },
  finally: function() {
    this.ui.stopProgress();
  }
});