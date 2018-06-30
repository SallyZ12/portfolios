class Credit < ApplicationRecord

  has_many :exposures
  has_many :users, through: :exposures
  has_many :transactions, through: :exposures
  

end
