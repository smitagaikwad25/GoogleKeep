import HttpStatus from 'http-status-codes';
import jwt from 'jsonwebtoken';

/**
 * Middleware to authenticate if user has a valid Authorization token
 * Authorization: Bearer <token>
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export const userAuth = async (req, res, next) => {
  try {
    let bearerToken = req.header('Authorization');

    console.log("bearerToken befor spliting----->", bearerToken)
    if (!bearerToken)
      throw {
        code: HttpStatus.BAD_REQUEST,
        message: 'Authorization token is required'
      };

    bearerToken = bearerToken.split(' ')[1];

    console.log("bearerToken after spliting---->", bearerToken)
    jwt.verify(bearerToken, process.env.SECRET_KEY, (err, verifiedToken) => {
      if (err) {
        throw {
          code: HttpStatus.BAD_REQUEST,
          message: 'Authorization token incorrect'
        };
      } else {
        console.log("after varification ---->", verifiedToken)
        req.body['data'] = verifiedToken;
        next();
      }
    }
    );
  } catch (error) {
    next(error);
  }
};
