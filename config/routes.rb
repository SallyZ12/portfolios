Rails.application.routes.draw do

  root 'welcome#home'

  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/auth/github/callback' => 'sessions#create'
  delete '/logout' => 'sessions#destroy'


  get 'credits/credits_states' => 'credits#credits_states'

  resources :users do
    resources :credits, only: [:index, :new, :create ]
  end
  resources :credits #, only: [:show, :edit, :update, :index]

  resources :exposures do
    resources :transactions, only: [:new, :create, :show, :edit, :update, :destroy]
  end
  resources :exposures, only: [:index, :show]

  resources :transactions, only: [:index, :show]

  resources :users





  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
