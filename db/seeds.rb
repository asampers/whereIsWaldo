# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Score.destroy_all

sampleScores = [
  {name: "Mark", time:17650}, 
  {name: "Jacob", time: 25000}, 
  {name: "Larry the Bird", time: 49090},
  {name: "User", time:55100}, 
  {name: "Oskar", time: 57600}, 
  {name: "T-dog", time: 60300},
  {name: "Shelly", time:72000}, 
  {name: "Frasier", time: 78600}, 
  {name: "Geo", time: 85900},
  {name: "Rick", time: 90900},
  ]

sampleScores.each do |sample|
  Score.create!(sample)
end

p "Created #{sampleScores.count} scores"
