require 'rails_helper'

RSpec.describe "Api::V1::Scores", type: :request do
  describe "POST/create" do
    context "with valid parameters" do
      let!(:test_score) { FactoryBot.create(:score) }

      before do
        post '/api/v1/scores/create', params:
        { score: {
            name: test_score.name,
            time: test_score.time,
          } 
        }
      end

      it "returns the name" do
        expect(json['name']).to eq(test_score.name)
      end

      it "returns the time" do
        expect(json['time']).to eq(test_score.time)
      end

      it "returns http success" do
        expect(response).to have_http_status(:success)
      end

    end 
  end

end
