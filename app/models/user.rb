class User < ApplicationRecord

  has_secure_password

  has_many :exposures
  has_many :credits, through: :exposures
  has_many :transactions, through: :exposures

  validates :username, presence: true
  validates :username, uniqueness: true

  validates :email, presence: true
  validates :email, uniqueness: true

  validates :password_digest, presence: true


  def self.find_or_create_by_omniauth(auth_hash)
    self.where(:email => auth_hash["info"]["email"]).first_or_create do |user|
      user.password = SecureRandom.hex
      user.username = auth_hash["info"]["nickname"]
    end
  end

end
