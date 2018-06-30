Rails.application.routes.draw do


  get '/login' => 'sessions#new'
  post '/signin' => 'sessions#create'
  delete '/logout' => 'sessions#destroy'

  resources :users
  resources :credits
  resources :transactions
  resources :exposures


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
