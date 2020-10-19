# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Genre.destroy_all
Book.destroy_all
User.destroy_all

@user = User.create!([{ name: 'admin' }, { email: 'admin@email.com' }, { password: '123456' }])

Book.create!([{ title: 'The Name of the Wind' }, { author: 'Patrick Rothfuss' }, { description: 'My name is Kvothe, I
have stolen princesses back from sleeping barrow kings. I burned down the town of Trebon. I have spent the night with
Felurian and left with both my sanity and my life. I was expelled from the University
at a younger age than most people are allowed in. I have talked to Gods,
loved women, and written songs that make the minstrels weep. You may have heard of me.' },
{ image: 'https://imgur.com/VFtTjxj.png' }, { user_id: 1 }])

Book.create!([{ title: 'Neuromancer' }, { author: 'William Gibson' }, { description: 'Case was the sharpest data theif in
the matrix-until he crossed the wrong people and they crippled his nervous system, banishing him from cyberspace. Now a
mysterious new employer has recruited him for a last-chance run at an unthinkably powerful artifical intelligence. With
a dead man riding shotgun and Molly, a mirror-eyed street samurai, to watch his back, Case is ready for the adventure
that upped the ante of an entire genre of fiction. ' }, { user_id: 1 }])

Book.create!([{ title: "The Hitchhiker's Guide to the Galaxy" }, { author: 'Douglas Adams' }, { description: "It's and
ordinary Thursday lunchtime for Arthur Dent until his house gets demolished. The Earth follows shortly afterwords, to
make way for a new hypserspace bypass, and his best friend just announced that he's an alien. At this moment they're
hurtling through space with nothing but their towels and an innocuous-looking book
inscribed with the big, friendly words: DON'T PANIC." }, { user_id: 1 }])
