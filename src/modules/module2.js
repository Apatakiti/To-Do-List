export default class Status {
  constructor(completed) {
    this.completed = completed = false;
  }

    checked = (element) => {
      element.completed = true;
    }

    unchecked = (element) => {
      element.completed = false;
    }
}