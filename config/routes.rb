Rails.application.routes.draw do

  root 'welcome#home'

  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  delete '/logout' => 'sessions#destroy'
  

  resources :users do
    resources :credits, only: [:new, :create, :show, :index, :edit]
  end

  resources :exposures do
    resources :transactions, only: [:new, :create, :show, :index, :edit, :update, :destroy]
  end


  resources :users
  resources :credits
  resources :transactions
  resources :exposures


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
