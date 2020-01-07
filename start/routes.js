'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('home')

Route.get('/posts','PostController.index');

Route.get('/posts/add','PostController.add');

Route.get('/posts/:id','PostController.details');

Route.get('/posts/edit/:id', 'PostController.edit')

Route.put('/posts/:id', 'PostController.update')
Route.delete('/posts/:id', 'PostController.destroy')

Route.post('/posts','PostController.store');

// Route.get('/test', () => 'Hello World')

// Route.get('/test2', function(){
//     return 'Hello there'
// })

// Route.get('/test/:id', function({params}){
//     return `this is the id ${params.id}`
// })