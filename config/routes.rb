Rails.application.routes.draw do

  root 'welcome#home'

  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  delete '/logout' => 'sessions#destroy'

  get '/credits_states' => 'credits#credits_states'

  resources :users do
    resources :credits, only: [:index, :new, :create ]
  end

  resources :credits, only [:show, :edit, :update, :destroy]

  resources :exposures do
    resources :transactions, only: [:new, :create, :show, :index, :edit, :update, :destroy]
  end


  resources :users

  resources :transactions
  resources :exposures


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
