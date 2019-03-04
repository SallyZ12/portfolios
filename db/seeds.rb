# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(id:1, username: "FSA", password: "ZZZZZZZZ", email: "name@fsa.com")
User.create(id:2, username: "AMBAC", password: "ZZZZZZZZ", email: "name@ambac.com")
User.create(id:3, username: "MBIA", password:"ZZZZZZZZ", email: "name@mbia.com")

Credit.create(id: 1, credit_name: "Delray Beach Water", rating: "A", sector: "Water", state: "FL")
Credit.create(id: 2, credit_name: "Brooklyn GO", rating: "A-", sector: "GO", state: "NY")
Credit.create(id: 3, credit_name: "Phoenix Electric", rating: "AA-", sector: "electric", state: "AZ")
Credit.create(id: 4, credit_name: "Rockaway Sewer", rating: "BBB", sector: "sewer", state: "NJ")

Exposure.create(id: 1, user_id: 1, credit_id: 1, limit: 100, rating: "A+")
Exposure.create(id: 2, user_id: 1, credit_id: 2, limit: 50, rating: "A-")
Exposure.create(id: 3, user_id: 2, credit_id: 2, limit: 75, rating: "A")
Exposure.create(id: 4, user_id: 3, credit_id: 3, limit: 50, rating: "AA")
Exposure.create(id: 5, user_id: 3, credit_id: 4, limit: 50, rating: "A")

Transaction.create(id: 1, exposure_id: 1, name: "Delray Beach Water", series: "2017C", par: 50)
Transaction.create(id: 2, exposure_id: 1, name: "Delray Beach Water", series: "2016C", par: 100)
Transaction.create(id: 3, exposure_id: 2, name: "Brooklyn Gen Ob Bonds", series: "2012A", par: 50)
Transaction.create(id: 4, exposure_id: 3, name: "Brooklyn Gen Ob Bonds", series: "2018B", par: 25)
Transaction.create(id: 5, exposure_id: 4, name: "Phoenix Electric Revenue Bonds", series: "2016D", par: 25)
Transaction.create(id: 6, exposure_id: 4, name: "Phoenix Electric Revenue Bonds", series: "2018", par: 25)
Transaction.create(id: 7, exposure_id: 2, name: "Brooklyn Gen Ob Bonds", series: "2009A", par: 50)
