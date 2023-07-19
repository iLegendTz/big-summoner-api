import Route from '@ioc:Adonis/Core/Route';

Route.group(() => {
    Route.get('', 'SummonersController.getSummoner')
}).prefix('lol/summoner')