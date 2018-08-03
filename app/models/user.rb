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




end
