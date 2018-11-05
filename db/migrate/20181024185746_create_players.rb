class CreatePlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :players do |t|
      t.string :username
      t.integer :score

      t.timestamps
    end
  end
end
