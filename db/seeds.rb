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

characters = [
  {name: "Da Vinci", x:0.166, y:0.374}, 
  {name: "Kahlo", x:0.895, y:0.2925}, 
  {name: "Picasso", x:0.7875, y:0.944}, 
  {name: "Van Gogh", x:0.145, y:0.824}, 
  {name: "Warhol", x:0.0325, y:0.1625}
];

characters.each do |charac|
  Character.find_or_create_by!(charac)
end

p "Created #{sampleScores.count} scores"
p "Created or Found #{characters.count} characters"
