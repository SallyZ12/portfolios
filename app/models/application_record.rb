class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

    RATING = ["", "AAA", "AA+", "AA", "AA-","A+", "A", "A-","BBB+", "BBB", "BBB-","below IG"]


end
