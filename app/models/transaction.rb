class Transaction < ApplicationRecord

  belongs_to :exposure

  validates :name, presence: true
  validates :series, presence: true
  validates :series, uniqueness: true

  scope :trans_top_five, -> {order("transactions.par DESC").limit(5)}


end
