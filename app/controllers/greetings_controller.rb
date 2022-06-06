class GreetingsController < ApplicationController
  def message
    @greetings = Greeting.all
    @random_greeting = @greetings[rand(@greetings.length)]

    respond_to do |format|
      format.json { render :json => @random_greeting }
    end
  end
end
