class Transaction < ApplicationRecord

  belongs_to :exposure

  validates :name, presence: true
  validates :series, presence: true
  validates :series, uniqueness: true


end
