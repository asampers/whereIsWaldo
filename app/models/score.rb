class Score < ApplicationRecord
  validates :name, presence: true
  validates :time, presence: true
end
