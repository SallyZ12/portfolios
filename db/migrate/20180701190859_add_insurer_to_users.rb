class AddInsurerToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :insurer, :boolean, default: :false
  end
end
