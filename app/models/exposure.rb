class Exposure < ApplicationRecord

  belongs_to :user
  belongs_to :credit
  has_many :transactions

end
