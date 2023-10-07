Rails.application.routes.draw do
  devise_for :users
  devise_for :models
  resources :posts
  #get 'home/index'
  get 'home/about'
  root 'home#index'
  get 'x_button', to: 'home#x_button'
  get 'y_button', to: 'home#y_button'
  get 'a_button', to: 'home#a_button'
  get 'b_button', to: 'home#b_button'
  get 'z_button', to: 'home#z_button'
  get 'u_button', to: 'home#u_button'
  get 'd_button', to: 'home#d_button'
  get 'l_button', to: 'home#l_button'
  get 'r_button', to: 'home#r_button'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
