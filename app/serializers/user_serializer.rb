class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest

  has_many :exposures
  has_many :credits
  has_many :transactions
end
