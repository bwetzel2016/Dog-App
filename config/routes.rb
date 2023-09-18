Rails.application.routes.draw do
  devise_for :users
  devise_for :models
  resources :posts
  #get 'home/index'
  get 'home/about'
  root 'home#index'
  get 'execute_js', to: 'home#execute_js'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
