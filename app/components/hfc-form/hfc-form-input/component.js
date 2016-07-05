import Ember from 'ember';

export default Ember.Component.extend({
  //For: File Upload Buttons
  didInsertElement() {
    let inputs = document.querySelectorAll('.hfc-form-file');

    Array.prototype.forEach.call(inputs, function(input) {
      let label  = input.parentNode;
      let labelVal = label.innerHTML;

      input.addEventListener('change', function(e) {
        let fileName = '';

        if(this.files && this.files.length > 1) {
          fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
        }
        else {
          fileName = e.target.value.split('\\').pop();
        }

        if(fileName) {
          label.querySelector('span').innerHTML = fileName;
          label.classList.add("active");
        }
        else {
          label.innerHTML = labelVal;
          label.classList.remove("active");
        }
      });
    });
  }
});
