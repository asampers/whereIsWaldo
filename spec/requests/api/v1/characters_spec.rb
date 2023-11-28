require 'rails_helper'

RSpec.describe "Api::V1::Characters", type: :request do
  describe "GET /index" do
    before do
      FactoryBot.create_list(:character, 5)
      get "/api/v1/characters/index" 
    end
    
    it "returns all characters" do 
      
      expect(json.count).to eq(5)
    end

    it "returns http success" do
      expect(response).to have_http_status(:success)
    end
  end

end
