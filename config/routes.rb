Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'characters/index'
      get 'scores/index'
      post 'scores/create'
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
end
