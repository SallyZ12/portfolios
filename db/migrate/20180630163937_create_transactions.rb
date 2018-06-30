class CreateTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :transactions do |t|
      t.string :name
      t.string :series
      t.integer :par, default: 0
      t.integer :exposure_id

      t.timestamps
    end
  end
end
