# frozen_string_literal: true

Rails.application.routes.draw do
  get 'welcome/index'
  get 'hello/say_hello'

  resources :articles do
    resources :comments
  end

  root 'welcome#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
