// Action Cable provides the framework to deal with WebSockets in Rails.
// You can generate new channels where WebSocket features live using the `rails generate channel` command.
//
//= require action_cable
//= require_self
//= require_tree ./channels

import * as ActionCable
    from "../../../../../../Ruby25-x64/lib/ruby/gems/2.5.0/gems/actioncable-5.2.1.1/lib/assets/compiled/action_cable";

(function () {
    this.App || (this.App = {});

    App.cable = ActionCable.createConsumer();

}).call(this);
