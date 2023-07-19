import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { riot_instance } from '../../../api/riot';

export default class SummonersController {
    public async getSummoner({ request, response }: HttpContextContract) {
        const { summonerName, server } = request.qs();

        return await riot_instance.get(`https://${server}/lol/summoner/v4/summoners/by-name/${summonerName}`)
            .then(({ data }) => response.status(200).send(data))
            .catch((error) => {
                const statusError = error.response.status;

                if (statusError === 404) {
                    return response.status(statusError).send({ status: statusError, message: 'No se ha encontrado el perfil' });
                }

                return response.status(statusError || 500).send({ status: statusError || 500, message: 'Ha ocurrido un error en la solicitud' });
            });
    }
}
