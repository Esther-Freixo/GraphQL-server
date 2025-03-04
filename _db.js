let games = [
    {id: '1', title: 'Zelda, Tears of the Kingdom', platform: ['Switch']},
    {id: '2', title: 'Final Fantasy 7 Remake', platform: ['PS5', 'Xbox']},
    {id: '3', title: 'Elden Ring', platform: ['PS5', 'Xbox', 'PC']},
    {id: '4', title: 'Mario Kart', platform: ['Switch']},
    {id: '5', title: 'Pokemon Scarlet', platform: ['PS5', 'Xbox', 'PC']},
    {id: '6', title: 'The Last of Us Part II', platform: ['PS5']},
    {id: '7', title: 'Cyberpunk 2077', platform: ['PS5', 'Xbox', 'PC']},
    {id: '8', title: 'Animal Crossing: New Horizons', platform: ['Switch']},
    {id: '9', title: 'Hades', platform: ['Switch', 'PC']},
    {id: '10', title: 'Ghost of Tsushima', platform: ['PS5']},
    {id: '11', title: 'Genshin Impact', platform: ['PS5', 'PC', 'Mobile']},
    {id: '12', title: 'Horizon Forbidden West', platform: ['PS5']},
    {id: '13', title: 'Resident Evil Village', platform: ['PS5', 'Xbox', 'PC']},
    {id: '14', title: 'Death Stranding', platform: ['PS5', 'PC']},
    {id: '15', title: 'Doom Eternal', platform: ['PS5', 'Xbox', 'PC']},
    {id: '16', title: 'Red Dead Redemption 2', platform: ['PS5', 'Xbox', 'PC']},
    {id: '17', title: 'Sekiro: Shadows Die Twice', platform: ['PS5', 'Xbox', 'PC']},
    {id: '18', title: 'Spider-Man: Miles Morales', platform: ['PS5']},
    {id: '19', title: 'Assassin’s Creed Valhalla', platform: ['PS5', 'Xbox', 'PC']},
    {id: '20', title: 'Control', platform: ['PS5', 'Xbox', 'PC']},
    {id: '21', title: 'Among Us', platform: ['Switch', 'PC', 'Mobile']},
    {id: '22', title: 'Fall Guys', platform: ['PS5', 'PC']},
    {id: '23', title: 'Overwatch 2', platform: ['PS5', 'Xbox', 'PC']},
    {id: '24', title: 'Valorant', platform: ['PC']},
    {id: '25', title: 'Apex Legends', platform: ['PS5', 'Xbox', 'PC']},
];

let authors = [
    {id: '1', name: 'mario', verified: true},
    {id: '2', name: 'yoshi', verified: false},
    {id: '3', name: 'peach', verified: true},
    {id: '4', name: 'luigi', verified: true},
    {id: '5', name: 'toad', verified: false},
    {id: '6', name: 'bowser', verified: false},
    {id: '7', name: 'daisy', verified: true},
    {id: '8', name: 'wario', verified: false},
    {id: '9', name: 'rosalina', verified: true},
    {id: '10', name: 'donkey kong', verified: false},
    {id: '11', name: 'king boo', verified: true},
    {id: '12', name: 'shy guy', verified: false},
    {id: '13', name: 'koopa troopa', verified: true},
    {id: '14', name: 'baby mario', verified: false},
    {id: '15', name: 'baby luigi', verified: true},
    {id: '16', name: 'waluigi', verified: false},
    {id: '17', name: 'birdo', verified: true},
    {id: '18', name: 'dry bones', verified: false},
    {id: '19', name: 'lakitu', verified: true},
    {id: '20', name: 'pom pom', verified: false},
];

let reviews = [
    {id: '1', rating: 9, content: 'Amazing visuals and a gripping storyline.', author_id: '1', game_id: '2'},
    {id: '2', rating: 10, content: 'An absolute masterpiece, a must-play!', author_id: '2', game_id: '1'},
    {id: '3', rating: 7, content: 'A bit challenging but very rewarding.', author_id: '3', game_id: '3'},
    {id: '4', rating: 5, content: 'Fun with friends but gets repetitive quickly.', author_id: '2', game_id: '4'},
    {id: '5', rating: 8, content: 'Great game, lots of new features.', author_id: '2', game_id: '5'},
    {id: '6', rating: 7, content: 'Good game, but not as good as the original.', author_id: '1', game_id: '2'},
    {id: '7', rating: 10, content: 'Best game I have ever played!', author_id: '3', game_id: '1'},
    {id: '8', rating: 9, content: 'Fantastic game, highly recommend it.', author_id: '4', game_id: '6'},
    {id: '9', rating: 6, content: 'Disappointing, expected more.', author_id: '5', game_id: '7'},
    {id: '10', rating: 8, content: 'Very engaging, love the new mechanics.', author_id: '6', game_id: '8'},
    {id: '11', rating: 9, content: 'Incredible game, worth every penny.', author_id: '7', game_id: '9'},
    {id: '12', rating: 8, content: 'Beautiful graphics and immersive story.', author_id: '8', game_id: '10'},
    {id: '13', rating: 7, content: 'Good game, but has some bugs.', author_id: '9', game_id: '11'},
    {id: '14', rating: 10, content: 'Amazing open-world experience!', author_id: '10', game_id: '12'},
    {id: '15', rating: 8, content: 'Solid game, with a few minor flaws.', author_id: '4', game_id: '2'},
    {id: '16', rating: 9, content: 'Loved the characters and the story.', author_id: '5', game_id: '3'},
    {id: '17', rating: 6, content: 'Not my type of game, but well made.', author_id: '6', game_id: '4'},
    {id: '18', rating: 8, content: 'Enjoyed it, great gameplay mechanics.', author_id: '7', game_id: '5'},
    {id: '19', rating: 7, content: 'Good game, but lacks replay value.', author_id: '8', game_id: '6'},
    {id: '20', rating: 9, content: 'Outstanding game, thoroughly enjoyed it.', author_id: '9', game_id: '7'},
    {id: '21', rating: 8, content: 'Great graphics and an engaging story.', author_id: '10', game_id: '8'},
    {id: '22', rating: 9, content: 'One of the best games in recent years.', author_id: '11', game_id: '9'},
    {id: '23', rating: 7, content: 'Good but has some performance issues.', author_id: '12', game_id: '10'},
    {id: '24', rating: 10, content: 'Absolutely loved this game!', author_id: '13', game_id: '11'},
    {id: '25', rating: 8, content: 'Well designed, very enjoyable.', author_id: '14', game_id: '12'},
    {id: '26', rating: 7, content: 'Fun game but a bit repetitive.', author_id: '15', game_id: '1'},
    {id: '27', rating: 9, content: 'Engaging story and characters.', author_id: '16', game_id: '2'},
    {id: '28', rating: 8, content: 'Good game, worth playing.', author_id: '17', game_id: '3'},
    {id: '29', rating: 7, content: 'Had some fun but expected more.', author_id: '18', game_id: '4'},
    {id: '30', rating: 9, content: 'Great sequel, improved mechanics.', author_id: '19', game_id: '5'},
    {id: '31', rating: 8, content: 'Very fun, especially with friends.', author_id: '20', game_id: '6'},
    {id: '32', rating: 9, content: 'Fantastic graphics and story.', author_id: '1', game_id: '7'},
    {id: '33', rating: 7, content: 'A bit underwhelming compared to the hype.', author_id: '2', game_id: '8'},
    {id: '34', rating: 10, content: 'Perfect game, I loved every second.', author_id: '3', game_id: '9'},
    {id: '35', rating: 8, content: 'Solid gameplay, nice graphics.', author_id: '4', game_id: '10'},
    {id: '36', rating: 9, content: 'Highly recommend, very enjoyable.', author_id: '5', game_id: '11'},
    {id: '37', rating: 7, content: 'Good game but had some issues.', author_id: '6', game_id: '12'},
    {id: '38', rating: 9, content: 'Loved the open-world environment.', author_id: '7', game_id: '1'},
    {id: '39', rating: 8, content: 'Great fun, especially in multiplayer.', author_id: '8', game_id: '2'},
    {id: '40', rating: 7, content: 'Decent game but could be better.', author_id: '9', game_id: '3'},
    {id: '41', rating: 9, content: 'Amazing story and gameplay.', author_id: '10', game_id: '4'},
    {id: '42', rating: 8, content: 'Well made, very fun to play.', author_id: '11', game_id: '5'},
    {id: '43', rating: 9, content: 'Enjoyed every moment of it.', author_id: '12', game_id: '6'},
    {id: '44', rating: 7, content: 'Good game but with some flaws.', author_id: '13', game_id: '7'},
    {id: '45', rating: 8, content: 'Very engaging, nice mechanics.', author_id: '14', game_id: '8'},
    {id: '46', rating: 9, content: 'One of the best games I have played.', author_id: '15', game_id: '9'},
    {id: '47', rating: 8, content: 'Solid game, enjoyable experience.', author_id: '16', game_id: '10'},
    {id: '48', rating: 7, content: 'Had some bugs but fun overall.', author_id: '17', game_id: '11'},
    {id: '49', rating: 9, content: 'Fantastic graphics and story.', author_id: '18', game_id: '12'},
    {id: '50', rating: 8, content: 'Good game, worth playing.', author_id: '19', game_id: '1'},
];
  
  export default { games, authors, reviews }