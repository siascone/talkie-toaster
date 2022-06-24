class UpdateUsersNamesFormat < ActiveRecord::Migration[5.2]
  def change

    remove_index :users, name: "index_users_on_firstname"
    remove_index :users, name: "index_users_on_lastname"

    remove_column :users, :firstname
    remove_column :users, :lastname

    add_column :users, :first_name, :string
    add_column :users, :last_name, :string

    add_index :users, :first_name
    add_index :users, :last_name
  end
end
