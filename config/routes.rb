Rails.application.routes.draw do
  get 'home/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  get '/greetings/message', to: 'greetings#message'

  # Defines the root path route ("/")
  root "home#index"
end
