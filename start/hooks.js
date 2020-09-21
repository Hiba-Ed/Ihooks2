const { hooks } = require('@adonisjs/ignitor')

hooks.after.providersBooted(() => {
  //const Validator = use('Validator')
  const View = use('View')
  const Moment = use('moment')
  View.global('getRelativeDate', function(datetime) {
    return Moment(datetime, "YYYY-MM-DD HH:mm:ss").fromNow()
  })
})
