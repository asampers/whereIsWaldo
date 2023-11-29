class Api::V1::ScoresController < ApplicationController
  def index
    score = Score.order(time: :asc).limit(10)
    render json: score
  end

  def create
    score = Score.new(score_params)
    if score.save
      render json: score
    else  
      render json: { message: "Validation Failure", errors: score.errors }, status: 422
    end    
  end

  private

  def score_params
    params.require(:score).permit(:name, :time)
  end
end
