class AddColumnsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :firstname, :string
    add_column :users, :lastname, :string

    add_index :users, :firstname
    add_index :users, :lastname
  end
end
