class CreateExposures < ActiveRecord::Migration[5.2]
  def change
    create_table :exposures do |t|
      t.integer :user_id
      t.integer :credit_id
      t.integer :limit, default: 0

      t.timestamps
    end
  end
end
