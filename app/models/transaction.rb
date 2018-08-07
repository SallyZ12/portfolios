class Transaction < ApplicationRecord

  belongs_to :exposure
  

  validates :name, presence: true
  validates :series, presence: true
  validates_uniqueness_of :series, scope: :credit_id


  scope :trans_top_ten, -> {order("transactions.par DESC").limit(10)}


end
