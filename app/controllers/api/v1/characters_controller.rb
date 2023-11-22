class Api::V1::CharactersController < ApplicationController
  def index
    character = Character.all
    render json: character
  end
end
