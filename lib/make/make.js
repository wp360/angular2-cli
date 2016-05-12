'use strict';

const fs = require('fs-extra');
const _  = require('lodash');

class Make {
  constructor(args) {
    Object.assign(this, {
      options : {
        path : './src/public',
      },
      fileName : '__name__',
      styleExt : '__style__',
    }, args);
  }

  init() {
    this.fileName = this.options.name;
    this.styleExt = 'scss';
  }

  make(options) {
    const _this = this;
    Object.assign(this.options, options);

    if (this.validate() && this.create()) {
      this.init();
      this.copy().
        then(() => {
          const files = this._getFiles();
          _this._processTemplates(files);
          _this.postInstall();
        });
    }
  }

  validate() {
    throw new Error('Make needs to have validate() defined.');
  }

  create() {
    throw new Error('Make needs to have create() defined.');
  }

  copy() {
    throw new Error('Make needs to have copy() defined.');
  }

  postInstall() {
    throw new Error('Make needs to have postInstall() defined.');
  }

  placeholders() {
    return {};
  }

  _getFiles() {
    return fs.readdirSync(this.dir);
  }

  _processTemplates(files) {
    for (const f of files) {
      const name = f.replace(/__name__/, this.dashedString(this.options.name))
                    .replace(/__style__/, this.styleExt);
      fs.renameSync(`${this.dir}/${f}`, `${this.dir}/${name}`);

      fs.readFile(`${this.dir}/${name}`, (err, data) => {
        const tpl = _.template(data);
        fs.writeFile(`${this.dir}/${name}`, tpl(this.placeholders()));
      });
    }
  }

  camelCaseString(str) {
    return str.replace(/-(.)/g, (s) => s[1].toUpperCase());
  }

  titleCaseString(str) {
    const camelStr = this.camelCaseString(str);
    return camelStr[0].toUpperCase() + camelStr.slice(1);
  }

  dashedString(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  }
}

module.exports = Make;