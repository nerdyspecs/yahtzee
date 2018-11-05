Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :games
  resources :players

  root to: "games#homepage"

  # get "/players_create" => "players#create",as: "players_create"
end
