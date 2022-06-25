import Vue from 'vue'

import moment from 'moment'

Vue.filter('formateDate', (date) => {
  return moment(date).format('LL')
})
