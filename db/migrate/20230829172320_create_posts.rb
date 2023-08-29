class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :first_name
      t.string :last_name
      t.string :znumber
      t.string :email
      t.string :advisor
      t.string :date
      t.time :time

      t.timestamps
    end
  end
end
