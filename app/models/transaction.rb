class Transaction < ApplicationRecord

  belongs_to :exposure

  validates :name, presence: true
  validates :series, presence: true


  def self.total_par


  end


end
