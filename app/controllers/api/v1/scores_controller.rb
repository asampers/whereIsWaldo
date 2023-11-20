class Api::V1::ScoresController < ApplicationController
  def index
    score = Score.order(time: :asc).limit(10)
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
