class Exposure < ApplicationRecord

  belongs_to :user
  belongs_to :credit
  has_many :transactions

  EXPOSURE_RATING = ["", "AAA", "AA+", "AA", "AA-","A+", "A", "A-","BBB+", "BBB", "BBB-","below IG"]

  def t_sum
      transactions.sum("par")
  end


end
