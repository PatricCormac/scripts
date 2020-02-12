var firstSoccerPlayer = {
  name: 'First',
  goals: 5,
  passes: 6
};

var secondSoccerPlayer = {
  name: 'Second',
  goals: 6,
  passes: 8
};

var thirdSoccerPlayer = {
  name: 'Third',
  goals: 7,
  passes: 4
};

var soccerPlayers = [firstSoccerPlayer, secondSoccerPlayer, thirdSoccerPlayer];

var getStatistics = function (players) {
  var coefficient, percent, sum=0;
  for(var i=0; i<players.length; i++){
    sum += players[i].goals;
  }
  for(var i=0; i<players.length; i++){
    coefficient = players[i].goals*2 + players[i].passes;
    percent = Math.round(players[i].goals*100/sum);
    players[i]['coefficient'] = coefficient;
    players[i]['percent'] = percent;
  }
  
  return players;
};

getStatistics(soccerPlayers);