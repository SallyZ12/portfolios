class Exposure < ApplicationRecord

  belongs_to :user
  belongs_to :credit
  has_many :transactions

  def t_sum
      transactions.sum("par")
  end


end
