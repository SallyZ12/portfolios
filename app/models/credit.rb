class Credit < ApplicationRecord

  has_many :exposures
  has_many :users, through: :exposures
  has_many :transactions, through: :exposures


  validates :credit_name, presence: true
  validates :credit_name, uniqueness: true
  validates :rating, presence: true
  validates :sector, presence: true
  validates :state, presence: true

  scope :scope_state, -> (state){where('state = ?', state)}


  CREDIT_SECTOR = ["", "excise tax", "electric", "GO", "gas", "lease", "water"]

  CREDIT_RATING = ["", "AAA", "AA+", "AA", "AA-","A+", "A", "A-","BBB+", "BBB", "BBB-","below IG"]

  CREDIT_STATE = ["","AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY",
  "LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OR","PA","PR","RI","SC",
  "TN","TX", "UT", "VT","VA","VI","WA","WV","WI","WY"]


end
