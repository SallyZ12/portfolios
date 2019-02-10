class ExposureSerializer < ActiveModel::Serializer
  attributes :id, :limit, :rating

  belongs_to :user
  belongs_to :credit
  has_many :transactions, serializer: TransactionExposureSerializer
end
