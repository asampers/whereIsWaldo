require 'rails_helper'

RSpec.describe "Api::V1::Scores", type: :request do
  describe "GET /index" do
    before do
      FactoryBot.create_list(:score, 15)
      get "/api/v1/scores/index" 
    end
    
    it "returns top ten scores" do 
      firstTime = Score.order(time: :asc).first.time
      tenthTime = Score.offset(9).order(time: :asc).first.time

      expect(json.count).to eq(10)
      expect(json.first['time']).to eq(firstTime)
      expect(json.last['time']).to eq(tenthTime)
    end

    it "returns http success" do
      get "/api/v1/scores/index"
      expect(response).to have_http_status(:success)
    end
  end
end
