import $ from 'jquery';
import deparam from 'deparam';
import {register} from '@shopify/theme-sections';


const selectors = {
  form: 'form'
};


register('email-capture', {
  onLoad() {
    this.$container = $(this.container);
    if(deparam(window.location.search.replace("?", '')).subscription == 'confirmed') {
      this.$container.addClass('success').show();
    } else {
      this.$container.show();
    }
  }
});