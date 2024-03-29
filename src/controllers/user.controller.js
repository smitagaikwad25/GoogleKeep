import HttpStatus from 'http-status-codes';
import * as UserService from '../services/user.service';


/**
 * Controller to create a new user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const userRegistration = async (req, res, next) => {
  try {
    const data = await UserService.userRegistration(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'User created successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to  login a user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */

export const userLogin = async (req, res, next) => {
  try {
    const data = await UserService.login(req.body);
    if (!data) {
      res.status(HttpStatus.NOT_FOUND).json({
        code: HttpStatus.NOT_FOUND,
        message: "email or password doesn't match"
      })

    } else {
      console.log("After success")

      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: "sucessfully logged in"
      })

    }

  } catch (error) {
    next(error);

  }

}


export const forgotpassword = async (req, res, next) => {
  try {
    const data = await UserService.forgotpassword(req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: "reset password link sent sucessfully"
    })

  } catch (error) {
    next(error);

  }

}






/**
 * Controller to  login a user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */

export const resetPassword = async (req, res, next) => {
  try {
    const userCredential = {
      password: req.body.password,
      UserID: req.body.data.id
    };
    const data = await UserService.resetPassword(req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      message: "reset Password is sucessfully done"
    });

  } catch (error) {
    next(error);

  }


}






