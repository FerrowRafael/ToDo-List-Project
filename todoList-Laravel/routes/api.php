<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// TASK
Route::prefix('tasks')->group(function () {
    Route::get('/', 'TaskController@getAllTasks');         // 1 ALL TASKS
    Route::get('/{id}', 'TaskController@getOneTask');      // 2 ONE TASK
    Route::post('/', 'TaskController@addTask');              // 3 ADD TASK
    Route::put('/{id}', 'TaskController@updateTask');       // 4 UPDATE TASK    
    Route::delete('/{id}', 'TaskController@deleteTask');       // 5 DELETE TASK
    
});
