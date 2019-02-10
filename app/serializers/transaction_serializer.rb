class TransactionSerializer < ActiveModel::Serializer
  attributes :id, :name, :series, :par

  belongs_to :exposure, serializer: TransactionExposureSerializer
end
