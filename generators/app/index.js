const Generator = require('yeoman-generator');
const yosay = require('yosay');
const capitalize = require('lodash/capitalize');

function toTitleCase(str) {
  return str
    .split('-')
    .map(capitalize)
    .join(' ');
}

module.exports = class extends Generator {
  // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);
  }

  async prompting() {
    const defaultLocation = './components';
    const defaultCategory = 'general';
    const defaultComponentName = 'component';

    const prompts = [
      {
        type: 'input',
        name: 'location',
        message: `Location :`,
        default: defaultLocation
      },
      {
        type: 'input',
        name: 'category',
        message: `Component category :`,
        default: defaultCategory
      },
      {
        type: 'input',
        name: 'name',
        message: `Your component name :`,
        default: defaultComponentName
      }
    ];

    this.answers = await this.prompt(prompts);
    this.answers.nameUp = toTitleCase(this.answers.name);
  }

  writing() {
    const { location, category, name } = this.answers;
    const getTo = ext =>
      `${location}/${category}/${this.answers.name}/${this.answers.name}${ext}`;

    this._copyOver('name.jsx', getTo('.jsx'));
    this._copyOver('name.story.js', getTo('.story.js'));
    this._copyOver('name.test.js', getTo('.test.js'));
    this._copyOver('name.module.scss', getTo('.module.scss'));
  }

  _copyOver(from, to) {
    this.fs.copyTpl(
      this.templatePath(from),
      this.destinationPath(to),
      this.answers
    );
  }
};
