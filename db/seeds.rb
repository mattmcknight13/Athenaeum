# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Genre.destroy_all
Book.destroy_all
User.destroy_all

@user = User.create!(name: 'admin', email: 'admin@email.com', password: '123456')
puts "#{User.count} users created"

@fantasy = Genre.create!(name: 'Fantasy')
@sf = Genre.create!(name: 'Sicence Fiction')
@mystery = Genre.create!(name: 'Mystery ')
@horror = Genre.create!(name: 'Horror')
@thriller = Genre.create!(name: 'Thriller')
@romance = Genre.create!(name: 'Romance')
@action = Genre.create!(name: 'Action/Adventure')
puts "#{Genre.count} Genres created"

@notw = Book.create!(title: 'The Name of the Wind', author: 'Patrick Rothfuss', description: 'My name is Kvothe, I
have stolen princesses back from sleeping barrow kings. I burned down the town of Trebon. I have spent the night with
Felurian and left with both my sanity and my life. I was expelled from the University
at a younger age than most people are allowed in. I have talked to Gods,
loved women, and written songs that make the minstrels weep. You may have heard of me.',
image: 'https://imgur.com/VFtTjxj.png', user: @user, genre: @fantasy)

@n = Book.create!(title: 'Neuromancer', author: 'William Gibson', description: 'Case was the sharpest data theif in
the matrix-until he crossed the wrong people and they crippled his nervous system, banishing him from cyberspace. Now a
mysterious new employer has recruited him for a last-chance run at an unthinkably powerful artifical intelligence. With
a dead man riding shotgun and Molly, a mirror-eyed street samurai, to watch his back, Case is ready for the adventure
that upped the ante of an entire genre of fiction. ', image: 'https://imgur.com/wfPdQIk.png', user: @user, genre: @sf)

@hgg = Book.create!(title: "The Hitchhiker's Guide to the Galaxy", author: 'Douglas Adams', description: "It's and
ordinary Thursday lunchtime for Arthur Dent until his house gets demolished. The Earth follows shortly afterwords, to
make way for a new hypserspace bypass, and his best friend just announced that he's an alien. At this moment they're
hurtling through space with nothing but their towels and an innocuous-looking book
inscribed with the big, friendly words: DON'T PANIC.", image: 'https://imgur.com/qf4PIqc.png', user: @user, genre: @sf)

@cc = Book.create!(title: 'At the Mountains of Madness', author: 'H.P. Lovecraft',
description: "H.P. Lovecraft's classic tale of an expedition to Antarctica and the surprising
discoveries made by the explorers", image: 'https://imgur.com/yhods4H.png', user: @user, genre: @horror)
puts "#{Book.count} Books created"



# @fantasy.books.push(@notw)
