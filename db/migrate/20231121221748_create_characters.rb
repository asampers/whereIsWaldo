class CreateCharacters < ActiveRecord::Migration[7.0]
  def change
    create_table :characters do |t|
      t.string :name, null: false
      t.decimal :x, null: false
      t.decimal :y, null: false

      t.timestamps
    end
  end
end
