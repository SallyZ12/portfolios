class CreditSerializer < ActiveModel::Serializer
  attributes :id, :credit_name, :rating, :sector, :state

  has_many :exposures
  has_many :users
  has_many :transactions 
end
