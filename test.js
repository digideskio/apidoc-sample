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
 * @apiSuccessExample {json}
 *    HTTP/1.1 200 Okay
 *    {
 *      "success": true
 *    }
 * 
 * @apiSuccessExample {json}
 *    HTTP/1.1 202 Redirect
 *    {
 *      "success": true
 *    }
 */

function user() {
  return 'hello';
}

/**
 * @api {post} /user Create User information
 * @apiName PostUser
 * @apiGroup User
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

