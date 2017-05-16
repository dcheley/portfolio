Rails.application.routes.draw do
  get 'contacts/new'

  get 'contacts/create'

  root "pages#show", page: "index"

  get "/pages/*page" => "pages#show"
end
