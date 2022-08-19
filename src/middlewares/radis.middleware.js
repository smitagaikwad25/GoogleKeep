import HttpStatus from 'http-status-codes';
import { client } from '../config/redis';

export const redis_data = async (req, res, next) => {

    const radis_data = await client.get('allNotes')
    if (radis_data) {
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: JSON.parse(radis_data),
            message: 'notes fetched from redis successfully'
        });
    } else {
        next();
    }

    // await client.get('allNotes', (err, redis_data) => {
    //     if (err) {
    //         return err;
    //     } else if (redis_data) {
    //         res.status(HttpStatus.OK).json({
    //             code: HttpStatus.OK,
    //             data: JSON.parse(redis_data),
    //             message: 'notes fetched from redis successfully'
    //         });

    //     } else {
    //         next();
    //     }
    // });
}