import games from '../GamesList';

const featuredGames = [];

const length = games.length;

for (let i = 0; i < length; i++) {
    if (games[i].featured) {
        featuredGames.push(games[i])
    }
}

export default featuredGames;