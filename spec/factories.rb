FactoryBot.define do
  factory :score do
    name { "Joe" }
    time { 20000 }
  end
end

FactoryBot.define do
  factory :character do
    name { "Kahlo" }
    x { 0.895 }
    y { 0.2925 }
  end
end