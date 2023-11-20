class Api::V1::ScoresController < ApplicationController
  def index
    score = Score.all.order(time: :asc)
    render json: score
  end

  def create
    score = Score.create!(score_params)
    if score
      render json: score
    else  
      render json: score.errors
    end    
  end

  private

  def score_params
    params.require(:score).permit(:name, :time)
  end
end
