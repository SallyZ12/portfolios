class Credit < ApplicationRecord

  has_many :exposures
  has_many :users, through: :exposures
  has_many :transactions, through: :exposures


  validates :credit_name, presence: true
  validates :credit_name, uniqueness: true
  validates :rating, presence: true
  validates :sector, presence: true
  validates :state, presence: true

end
