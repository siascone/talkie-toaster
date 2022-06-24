# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

dave = User.create!(username: 'dLister', first_name: 'David', last_name: 'Lister', age: 25, password: 'reddwarf', email: 'dlister@reddwarf.com')
dave = User.create!(username: 'Cat', first_name: 'The', last_name: 'Cat', age: 25, password: 'reddwarf', email: 'tcat@reddwarf.com')
dave = User.create!(username: 'smegHead', first_name: 'Arnold', last_name: 'Rimmer', age: 25, password: 'reddwarf', email: 'arimmer@reddwarf.com')
dave = User.create!(username: 'kryton', first_name: 'Kryton', last_name: '4000 Series Android', age: 25, password: 'reddwarf', email: 'kryton@reddwarf.com')