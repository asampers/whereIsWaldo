require 'rails_helper'

RSpec.describe Score, type: :model do
  subject(:score) { create(:score) }

  it { is_expected.to validate_presence_of(:name) }
  it { is_expected.to validate_presence_of(:time) }
end
