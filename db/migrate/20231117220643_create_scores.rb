class CreateScores < ActiveRecord::Migration[7.0]
  def change
    create_table :scores do |t|
      t.string :name, null:false
      t.integer :time, null:false

      t.timestamps
    end
  end
end
