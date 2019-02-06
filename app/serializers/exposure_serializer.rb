class ExposureSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :credit_id, :limit, :rating
end
