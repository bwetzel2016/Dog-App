# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create([
              {
                email: 'brandon@fau.edu',
                password: '123456'
              },
              {
                email: 'caleb@fau.edu',
                password: '123456'
              },
              {
                email: 'shahima@fau.edu',
                password: '123456'
              },
              {
                email: 'endian@fau.edu',
                password: '123456'
              },
              {
                email: 'luc1234@fau.edu',
                password: '123456'
              }
            ])
