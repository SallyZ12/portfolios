class CreditSerializer < ActiveModel::Serializer
  attributes :id, :credit_name, :rating, :sector, :state
end
