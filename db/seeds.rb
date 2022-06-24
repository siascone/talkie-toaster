# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

dave = User.create!(username: 'dave', first_name: 'David', last_name: 'Lister', age: 25, password: 'reddwarf', email: 'dlister@reddwarf.com')
cat = User.create!(username: 'Cat', first_name: 'The', last_name: 'Cat', age: 25, password: 'reddwarf', email: 'tcat@reddwarf.com')
arnold = User.create!(username: 'smegHead', first_name: 'Arnold', last_name: 'Rimmer', age: 25, password: 'reddwarf', email: 'arimmer@reddwarf.com')
kryton = User.create!(username: 'kryton', first_name: 'Kryton', last_name: '4000 Series Android', age: 25, password: 'reddwarf', email: 'kryton@reddwarf.com')
kristine = User.create!(username: 'kris', first_name: 'Kristine', last_name: 'Kochanski', age: 25, password: 'reddwarf', email: 'kkochanski@reddwarf.com')
holly = User.create!(username: 'hol', first_name: 'Holly', last_name: 'IQ 6000', age: 25, password: 'reddwarf', email: 'holly@reddwarf.com')
skutter_1 = User.create!(username: 'skuttBob', first_name: 'Bob', last_name: 'Skutter', age: 25, password: 'reddwarf', email: 'bskutter@reddwarf.com')
skutter_2 = User.create!(username: 'skuttMadge', first_name: 'Madge', last_name: 'Skutter', age: 25, password: 'reddwarf', email: 'mskutter@reddwarf.com')