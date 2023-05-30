# AniQuotes

## File/Folder Structure

### Server

!(https://i.imgur.com/5YYDkoi.png)

### Client

!(https://i.imgur.com/fSJmRSX.png)

### Project Proposal

My project will allow the use to access many different anime quotes and seperate them by anime name and character to see which chacter from which show said what.


### Project name and description

AniQuotes is an app that takes your those anime quotes you love to repeat and tells you who said them and the show they originated from.


### Routes and models

- My routes will include:

- GET/random-quote, POST/random-quote, PATCH/random-quote/:id, DELETE/random-quote/:id 

- GET/random-quote/:title, POST/random-quote/:title

- GET/random-quote/:character, POST/random-quote/:character

- GET/animes, POST/animes

- My models will be randomQuotes and animeNames 

- My reference will be allAnimeNames and randomQuoteByTitle

- I will be seeding my database by creating a random-quote.json and adding that to my data folder then importing that data into the seed.js then I'll export the data using fetch or axios and seed the data following the same format as the models to create new quotes

- In the GET/random-quote query I will reference the anime-names model so that the quote will display exactly which anime is being pulled from once displayed.

### User Stories

- As a user I should be able to query ('/random-quote') to access a random quote in the api 

- As a user I should be able to query ('/random-quote/:title') to access a quote from a specified show. (One Piece, Bleach, etc..)

- As a user I should be able to query ('/randomQ-quote/:character') to grab a random quote from the chacter specified (Luffy, Naruto)

### MVP Goals 

- I want to be able to Get/Post/Put/Delete different anime quotes 

- I want to be able to call a certain anime and get quotes from only that anime 

- I want to be able to call a certain anime character and get a quote/quotes from only that character and no others.

- I want to be able to access all the anime that are availble and display them 

### Stretch Goals 

- I want to be able to add the queries for ('/tenRandomQuotes', '/tenRandomQuotesByTitle', '/tenRandomQuoteeByCharacter') so the number of quotes gotten can increase 

- I want to add a ('/allCharactersNames') query so the user can see exactly how many characters and unique quotes there are 

