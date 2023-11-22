class Character < ApplicationRecord
  validates :name, presence: true
  validates :x, presence: true
  validates :y, presence: true
end
