import Env from '@ioc:Adonis/Core/Env';
import axios from "axios";

export const riot_instance = axios.create({
    headers: { 'X-Riot-Token': `${Env.get('RIOT_API_KEY', '')}` }
});