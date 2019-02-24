class ExposureSerializer < ActiveModel::Serializer
  attributes :id, :limit, :rating, :t_sum

  belongs_to :user
  belongs_to :credit
  has_many :transactions
  
end
