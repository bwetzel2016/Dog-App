class AddFieldsToPosts < ActiveRecord::Migration[6.0]
  def change
    add_column :posts, :room_number, :string
  end
end
