Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users do
    resources :books
  end
  resources :books
  resources :genres, only: :index
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
