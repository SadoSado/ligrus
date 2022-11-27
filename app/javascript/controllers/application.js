import { Application } from "@hotwired/stimulus"
import Notification from 'stimulus-notification'
import Dropdown from 'stimulus-dropdown'

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }

application.register('notification', Notification)
application.register('dropdown', Dropdown)
