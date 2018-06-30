class CreateCredits < ActiveRecord::Migration[5.2]
  def change
    create_table :credits do |t|
      t.string :credit_name
      t.string :rating
      t.string :sector
      t.string :state

      t.timestamps
    end
  end
end
