class TransactionSerializer < ActiveModel::Serializer
  attributes :id, :name, :series, :par, :exposure_id
end
