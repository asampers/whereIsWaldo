require 'rails_helper'

RSpec.describe Character, type: :model do
  subject(:character) { create(:character) }

  it { is_expected.to validate_presence_of(:name) }
  it { is_expected.to validate_presence_of(:x) }
  it { is_expected.to validate_presence_of(:y) }
end
