/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 * 
 * @apiErrorExample {json} Error-Response:
 *    HTTP/1.1 404 Not Found
 *    {
 *      "error": "UserNotFound"
 *    }
 * 
 * @apiSuccessExample {json} 209 Working
 *    HTTP/1.1 200 Okay
 *    {
 *      "success": true
 *    }
 * 
 * @apiSuccessExample {json} 202 Redirect
 *    HTTP/1.1 202 Redirect
 *    {
 *      "success": true
 *    }
 * 
 * @apiSampleRequest off
 */

function user() {
  return 'hello';
}

/**
 * @api {post} /user Create User information
 * @apiName PostUser
 * @apiGroup User
 * @apiDescription
 *   This is a test.
 * 
 *   Multiple **lines**!
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */

function user() {
  return 'hello';
}

/**
 * @api {get} /order/:id Request Order information!!
 * @apiName GetOrder
 * @apiGroup Order
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 * 
 * @apiParam {String} [firstname]  Optional Firstname of the User.
 * @apiParam {String} lastname     Mandatory Lastname.
 * @apiParam {String} country="DE" Mandatory with default value "DE".
 * @apiParam {String} [age=18]     Optional Age with default 18.
 *
 * @apiParam (Login) {String} pass Only logged in users can post this.
 *                                 In generated documentation a separate
 *                                 "Login" Block will be generated.
 */

function user() {
  return 'hello';
}

/**
 * @api {post} /order Create a New Order
 * @apiName PostOrder
 * @apiGroup Order
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */

function user() {
  return 'hello';
}

